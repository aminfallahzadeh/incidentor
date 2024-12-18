// IMPORTS
import { Title } from "@/shared/components/Title";
import { INCIDENTOR_PLANS } from "@/constants/consts";

const Plans = () => {
  const content = (
    <>
      <Title.Primary title={INCIDENTOR_PLANS} back={true} home={false} />
      <section className="main"></section>
    </>
  );

  return content;
};

export default Plans;
