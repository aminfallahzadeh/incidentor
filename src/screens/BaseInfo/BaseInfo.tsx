// IMPORTS
import { useSearchParams } from "react-router-dom";
import { Title } from "@/shared/components/Title";
import { BASE_INFO } from "@/constants/consts";
import { PlansForm } from "./forms/PlansForm";
import { PlansGrid } from "./grids/PlansGrid";
import { OperationalDomainForm } from "./forms/OperationalDomainForm";
import { OperationalDomainGrid } from "./grids/OperationalDomainGrid";
import { TargetsForm } from "./forms/TargetsForm";
import { TargetsGrid } from "./grids/TargetsGrid";
import { DangerForm } from "./forms/DangerForm";
import { DangerGrid } from "./grids/DangerGrid";
import { ActionForm } from "./forms/ActionForm";
import { ActionGrid } from "./grids/ActionGrid";
import { ActivityForm } from "./forms/ActivityForm";
import { ActivityGrid } from "./grids/ActivityGrid";
import { SubActivityForm } from "./forms/SubActivityForm";
import { SubActivityGrid } from "./grids/SubActivityGrid";
import { ComplicationsForm } from "./forms/ComplicationsForm";
import { ComplicationsGrid } from "./grids/ComplicationsGrid";
import { ExecutivesForm } from "./forms/ExecutivesForm";
import { ExecutivesGrid } from "./grids/ExecutivesGrid";

const BaseInfo = () => {
  // STATES
  const [searchParams] = useSearchParams();

  // CONSTS
  const tab = searchParams.get("tab");
  const title = searchParams.get("title");

  // HANDLERS
  const renderContent = (tab: string | null) => {
    switch (tab) {
      case "plans":
        return (
          <>
            <PlansForm />
            <PlansGrid />
          </>
        );
      case "operational-domain":
        return (
          <>
            <OperationalDomainForm />
            <OperationalDomainGrid />
          </>
        );
      case "targets":
        return (
          <>
            <TargetsForm />
            <TargetsGrid />
          </>
        );
      case "danger":
        return (
          <>
            <DangerForm />
            <DangerGrid />
          </>
        );
      case "action":
        return (
          <>
            <ActionForm />
            <ActionGrid />
          </>
        );
      case "activity":
        return (
          <>
            <ActivityForm />
            <ActivityGrid />
          </>
        );
      case "sub-activity":
        return (
          <>
            <SubActivityForm />
            <SubActivityGrid />
          </>
        );
      case "complications":
        return (
          <>
            <ComplicationsForm />
            <ComplicationsGrid />
          </>
        );
      case "executives":
        return (
          <>
            <ExecutivesForm />
            <ExecutivesGrid />
          </>
        );
      default:
        return null;
    }
  };

  const content = (
    <>
      <Title.Primary
        title={BASE_INFO + " : " + title}
        back={true}
        home={false}
      />
      <section className="main">{renderContent(tab)}</section>
    </>
  );
  return content;
};

export default BaseInfo;
