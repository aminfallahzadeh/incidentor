// IMPORTS
import { Title } from "@/shared/components/Title";
import { CartableGrid } from "./grids/CartableGrid";
import { CARTABLE } from "@/constants/consts";

export const Cartable = () => {
  const content = (
    <>
      <Title.Primary title={CARTABLE} back={false} home={false} />
      <section className="main">
        <CartableGrid />
      </section>
    </>
  );

  return content;
};
