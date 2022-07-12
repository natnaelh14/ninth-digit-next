import React, { Component } from 'react';
import isEqualWith from 'lodash.isequalwith';
import camelCase from "lodash.camelcase";
import {
  SpringGrid,
  measureItems,
  layout as layouts,
  easings,
} from 'react-stonecutter';

export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = this.createGrid();
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
      !isEqualWith(nextProps, this.props, (a, b, key) => {
        if (key === 'children') return true;
      })
    ) {
      this.setState(this.createGrid());
    }
  }
  createGrid = () => {
    let Grid = SpringGrid;
    Grid = measureItems(Grid);
    return { Grid };
  };

  render() {
    const { children } = this.props;
    const { Grid } = this.state;
    const gridLayout = layouts[camelCase('Simple')];
    return (
      <Grid
        className='grid'
        component='ul'
        columns={3}
        columnWidth={300}
        gutterWidth={10}
        gutterHeight={5}
        layout={gridLayout}
        perspective={600}
        duration={800}
        easing={easings.cubicOut}
        springConfig={null}
        stiffness={60}
        damping={14}
        gutter={10}
        itemHeight={225}
      >
        {children}
      </Grid>
    );
  }
}
