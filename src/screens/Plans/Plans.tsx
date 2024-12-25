// IMPORTS
import { Title } from "@/shared/components/Title";
import { INCIDENTOR_PLANS } from "@/constants/consts";
import { afterAreasList } from "@/data/plans";
import { plansRenderer } from "@/utils/renderNavigation";

const Plans = () => {
  const content = (
    <>
      <Title.Primary title={INCIDENTOR_PLANS} back={true} home={false} />
      <section className="main">
        <ul className="plans">{plansRenderer(afterAreasList)}</ul>
      </section>
    </>
  );

  return content;
};

export default Plans;
