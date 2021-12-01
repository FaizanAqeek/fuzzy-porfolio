import React from 'react';
import RcDrawer from 'rc-drawer';

export default function Drawer ({ 
  className,
  children,
  toggleHandler,
  open,
  width,
  placement,
  drawerStyle,
  ...props
}) {
  return (
      <RcDrawer
      open={open}
      onClick={toggleHandler}
      onClose={toggleHandler}
      className={`drawer ${className || ''}`.trim()}
      width={width}
      placement={placement}
      level={null}
      duration={"0.4s"}
      children={children} 
      {...props}
      />
  );
};

Drawer.defaultProps = {
  width: '320px',
  placement: 'left',
};