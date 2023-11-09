import React, { useEffect, useState } from "react";

import { ResponsiveLine } from "@nivo/line";
import { Box } from "@mui/material";
import { AxisTickProps } from '@nivo/axes'
export interface ResponsiveProps {
  graphData: Array<{
    id: string;
    color: string
    data: Array<{
      x: string | number;
      y: number | string;
    }>;
  }>;
  margins?: { top: number; right: number; bottom: number; left: number }
  enableYGrid: boolean;

  showXAxis: boolean;
  customTick?(tick: AxisTickProps<string>): React.JSX.Element
  legendProps?: {
    translateX: number
    translateY: number
    itemHeight: number
    itemWidth: number
    itemSpacing: number
    symbolSize: number
    itemTextColor: string
  }
  showLegends: boolean;
  height?:string | number;
  width?: string | number;
}

const GraphAtom = (props: ResponsiveProps) => {
  const [chartData, setChartData] = useState(
    Array<{
      id: string | number
      color: string
      data: Array<{
        x: number | string | Date
        y: number | string | Date
      }>
    }>
  )

  useEffect(() => {
  

    setChartData(props.graphData)
  }, [props.graphData])

  return (
    <Box width={props.width} height={props.height}>
      <ResponsiveLine

        data={chartData}
        margin={props.margins}
        xScale={{
          type: 'time',
          format: '%Y-%m-%d',
          precision: 'day',
          useUTC: false,
        }}

        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
          stacked: false,
          reverse: false,
        }}
        xFormat="time:%Y-%m-%d"
        colors={{ datum: 'color' }}

    
        curve="natural"
        axisTop={null}
        axisRight={null}
        axisLeft={null}
        axisBottom={
          
          props.showXAxis
            ? {
                tickValues: 5,
                format: '%b %d',
                tickPadding: 10,
                renderTick: props.customTick,
              }
            : { tickValues: 0, format: '', tickPadding: 10 } //Hide the X axis as per showXAxis
        }
        enableGridX={false}
        areaOpacity={0.3}
        enablePoints={false}
        enableArea={true}
        enableGridY={props.enableYGrid}
        useMesh={true}
        legends={
          props.showLegends
            ? [
                {
                  anchor: 'top-right',
                  direction: 'row',
                  justify: false,
                  translateX: props.legendProps?.translateX,
                  translateY: props.legendProps?.translateY,
                  itemWidth: props.legendProps?.itemWidth ?? 0,
                  itemHeight: props.legendProps?.itemHeight ?? 0,
                  itemsSpacing: props.legendProps?.itemSpacing,
                  symbolSize: props.legendProps?.symbolSize,
                  symbolShape: 'circle',
                  itemDirection: 'left-to-right',
                  itemTextColor: props.legendProps?.itemTextColor,
                },
              ]
            : undefined
        }
      />
    </Box>
  );
};
export default GraphAtom;
