import Button from "@/components/DesignedPageComponents/Button.component";
import Container from "@/components/DesignedPageComponents/Container.component";
import Text from "@/components/DesignedPageComponents/Text.component";
import NavigationBar from "@/components/NavigationBar/NavigationBar.component";
import RenderNode from "@/components/RenderNode/RenderNode.component";
import MainControlSideNavigation from "@/components/Shared/MainControlSideNavigation/MainControlSideNavigation.component";
import { Editor } from "@craftjs/core";
import { Outlet } from "react-router";
import Containerx from "./BuilderLayout.style";
import Design from "../../../modules/Design/Design.component";

function BuilderLayout(): JSX.Element {
  return (
    <Containerx>
      <Editor resolver={{ Button, Text, Container }} onRender={RenderNode}>
        <div className="row pe-4 ps-4">
          <div className="col-3">
            <MainControlSideNavigation />
          </div>
          <div className="col-9 main_container">
            <div className="row main_page">
              <div className="col-12">
                <NavigationBar />
              </div>
              <div className="col-12 outlet">
                <Design />
              </div>
            </div>
          </div>
        </div>
      </Editor>
    </Containerx>
  );
}

export default BuilderLayout;
