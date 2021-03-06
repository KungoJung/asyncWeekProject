import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

const Chart = (props) => {
  const {data} = props
  return(
    <div className="chart-container">
      <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
          <VictoryAxis
            // tickValues specifies both the number of ticks and where
            // they are placed on the axis
            tickValues={[1, 2, 3]}
            tickFormat={["Deaths", "Hosp", "Pos Cases"]}
          />
          <VictoryAxis
            dependentAxis
            // tickFormat specifies how ticks should be displayed
            tickFormat={(x) => (`${x / 1000}k`)}
          />
          <VictoryBar
            style={{
              data: { fill: "#9CD08F" }
            }}
            data={[
              {type: "Deaths", total: data.death},
              {type: "Cur Hosp", total: data.hospitalized},
              {type: "Pos Cases", total: data.positive},
              // {type: "Tests", total: data.total}
            ]}
            x="type"
            y="total"
            labels={({ datum }) => {
              const lab = datum.total ? `total: ${datum.total}` : "Not known"
              return lab}
            }
          />
        </VictoryChart>
    </div>
  )
}

export default Chart
