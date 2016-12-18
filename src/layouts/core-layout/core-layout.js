import React from "react";

import { Grid } from "react-bootstrap";

export const CoreLayout = ({ children }) => (
    <Grid>
        { children }
    </Grid>
);

CoreLayout.propTypes = {
    children : React.PropTypes.element.isRequired
};

export default CoreLayout;
