import SiteLogo from "@/assets/images/global/logo_with_name.svg";
import DesignTools from "@/components/DesignTools/DesignTools.component";
import CustomComponents from "@/components/CustomComponents/CustomComponents.component";
import { Avatar, AvatarGroup } from "@mui/material";
import Container from "./MainControlSideNavigation.style";

type MainControlSideNavigationProps = {};

function MainControlSideNavigation(_props: MainControlSideNavigationProps): JSX.Element {
  return (
    <Container>
      <div className="primary_card">
        <div className="site_logo">
          <img src={SiteLogo} alt="SiteLogo" />
        </div>
        <div className="control_menue">
          <div className="design_tools">
            <DesignTools />
          </div>
          <div className="design_tools">
            <CustomComponents />
          </div>
        </div>
        <div className="user_card_section">
          <AvatarGroup>
            <Avatar className="profile_pic m-2" src="ht//" alt="Jhon Smith" sx={{ backgroundColor: "#0086FF", fontWeight: "bold" }} />
          </AvatarGroup>
          <div className="user_info">
            <span className="fw-bold d-block">Jhon Smith</span>
            <small>UI/UX Developper</small>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default MainControlSideNavigation;
