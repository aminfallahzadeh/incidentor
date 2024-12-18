// IMPORTS
import { useSearchParams } from "react-router-dom";
import { Title } from "@/shared/components/Title";
import { BASE_INFO } from "@/constants/consts";
import { PlansForm } from "./forms/PlansForm";
import { PlansGrid } from "./grids/PlansGrid";

const BaseInfo = () => {
  // STATES
  const [searchParams] = useSearchParams();

  // CONSTS
  const tab = searchParams.get("tab");
  const content = (
    <>
      <Title.Primary title={BASE_INFO} back={true} home={false} />
      <section className="main">
        {tab === "plans" ? (
          <>
            <PlansForm />
            <PlansGrid />
          </>
        ) : null}
      </section>
    </>
  );
  return content;
};

export default BaseInfo;
