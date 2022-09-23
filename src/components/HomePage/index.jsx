
import { RenderHeader } from "../renderHeader";
import { RenderMain } from "../renderMain";

export const RenderHome = ({ children }) => {
  return (
    <>
      <RenderHeader>
        {children}
      </RenderHeader>
      <RenderMain>
          
      </RenderMain>
    </>
  );
};
