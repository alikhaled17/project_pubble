import React from "react";
import Container from "./NavigationBar.style";

type NavigationBarProps = {};

function NavigationBar(props: NavigationBarProps): JSX.Element {
  return (
    <Container>
      <div className="primary_card">
        <div className="navigation_list">
          <span role="button" className="navigation_list--item">
            Design
          </span>
          <span role="button" className="navigation_list--item">
            Integrations
          </span>
          <span role="button" className="navigation_list--item">
            Customer Insights
          </span>
          <span role="button" className="navigation_list--item">
            Publish
          </span>
        </div>
      </div>
    </Container>
  );
}

export default NavigationBar;
