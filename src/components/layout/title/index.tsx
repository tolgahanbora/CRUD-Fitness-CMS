import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";

import logoYatay from '../../../assets/logoYatay.svg'
import DüzLogo from '../../../assets/DüzLogo.svg'

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={DüzLogo} alt="Refine" width="80px" />
        ) : (
          <img src={logoYatay} alt="Refine" width="170px" style={{ marginTop: "10px"}}/>
        )}
      </Link>
    </Button>
  );
};
