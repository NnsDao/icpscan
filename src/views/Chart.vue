<template>
  <Header />
  <main style="position: relative">
    <div class="map-info">
      <table>
        <thead></thead>
        <tbody>
          <tr breakpoint="2" v-for="(info, name) in mapInfo" :key="name">
            <td
              class="map-info-name"
              color="link"
              breakpoint="2"
              showborders="0"
            >
              {{ name }}
            </td>
            <td class="map-info-value" breakpoint="2" showborders="0">
              {{ info }}
            </td>
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
    <div id="map" :style="styleO" />
  </main>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import * as echarts from "echarts";
import { ref, onMounted } from "vue";
import "echarts-gl";

export default {
  name: "Chart",
  components: { Header, Footer },
  setup() {
    const styleO = ref({
      height: window.innerHeight + "px",
      width: window.innerWidth + "px",
    });

    onMounted(async () => {
      var myChart = echarts.init(document.getElementById("map"));

      window.onresize = () => {
        styleO.value.width = window.innerWidth + "px";
        styleO.value.height = window.innerHeight + "px";
        myChart.resize(styleO);
      };

      const locations = await fetch(
        "https://ic-api.internetcomputer.org/api/locations"
      ).then((response) => response.json());

      const routes = [];
      for (const from of locations) {
        for (const to of locations) {
          routes.push([
            [from.longitude, from.latitude, 0], // 起点的经纬度和海拔坐标
            [to.longitude, to.latitude, 0], // 终点的经纬度和海拔坐标
          ]);
        }
      }

      myChart.setOption({
        dataset: [
          {
            source: locations,
          },
        ],
        backgroundColor: "#000",
        globe: {
          environment:
            "https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data-gl/asset/starfield.jpg",
          baseTexture: "/img/world.jpg",
          shading: "lambert",
          targetCoord: [116.46, 39.92], // 定位到北京

          light: {
            ambient: {
              intensity: 0.4,
            },
            main: {
              intensity: 0.4,
            },
          },

          viewControl: {
            autoRotate: true,
            autoRotateSpeed: 2,
            alpha: 60,
          },
        },
        series: [
          {
            type: "lines3D",
            coordinateSystem: "globe",
            blendMode: "lighter",
            effect: {
              show: true,
            },
            lineStyle: {
              width: 1,
              color: "rgb(50, 50, 150)",
              opacity: 0.1,
            },

            data: routes,
          },
          {
            type: "scatter3D",
            coordinateSystem: "globe",
            blendMode: "lighter",
            symbolSize: 10,
            label: {
              // 在文本中，可以对部分文本采用 rich 中定义样式。
              // 这里需要在文本中使用标记符号：
              // `{styleName|text content text content}` 标记样式名。
              // 注意，换行仍是使用 '\n'。
              formatter: (params) => {
                return [
                  `{name|${params.data.name}}`,
                  `{operator|${params.data.node_operator}: ${params.data.total_nodes}}`,
                ].join("\n");
              },

              // 这里是文本块的样式设置：
              fontSize: 15,
              borderWidth: 3,
              backgroundColor: "rgba(31, 41, 55)",
              padding: [3, 10, 10, 5],
              lineHeight: 25,

              // rich 里是文本片段的样式设置：
              rich: {
                name: {
                  color: "#ffffff",
                  fontSize: 20,
                  marginBottom: 10,
                  lineHeight: 25,
                },
                operator: {
                  color: "#ffffff",
                  fontSize: 14,
                  lineHeight: 20,
                },
              },
            },
            itemStyle: {
              color: "rgb(50, 50, 150)",
              opacity: 1,
            },
            encode: {
              lng: "longitude",
              lat: "latitude",
            },
            datasetIndex: 0,
          },
        ],
      });
    });

    const mapInfo = ref({});

    onMounted(async () => {
      const [providers, subnets, activeNodes, boundaryNodes, CPUCores] =
        await Promise.all([
          fetch(
            "https://ic-api.internetcomputer.org/api/node-providers/count"
          ).then((response) => response.json()), // Node Providers
          fetch(
            "https://ic-api.internetcomputer.org/api/metrics/ic-subnet-total"
          ).then((response) => response.json()), // Subnets
          fetch(
            "https://ic-api.internetcomputer.org/api/metrics/ic-nodes-count"
          ).then((response) => response.json()), // Active Nodes
          fetch(
            "https://ic-api.internetcomputer.org/api/metrics/boundary-nodes-count"
          ).then((response) => response.json()), // Boundary Nodes
          fetch(
            "https://ic-api.internetcomputer.org/api/metrics/ic-cpu-cores"
          ).then((response) => response.json()), // CPU Cores
        ]);

      console.log(providers);

      mapInfo.value = {
        "Node Providers	": providers.node_providers[0].node_providers,
        Subnets: subnets.ic_subnet_total[1],
        "Active Nodes": activeNodes.ic_nodes_count[0][1],
        "Boundary Nodes": boundaryNodes.boundary_nodes_count[1],
        "CPU Cores": CPUCores.ic_cpu_cores[0][1],
      };
    });

    return {
      styleO,
      mapInfo,
    };
  },
};
</script>

<style scoped>
.map-info {
  color: #ffffff;
  position: absolute;
  z-index: 999999;
  right: 10px;
  top: 60px;
  background-color: rgba(31, 41, 55);
  opacity: 0.9;
  border-radius: 5px;
}
.map-info-name {
  padding: 5px 30px 5px 20px;
}
.map-info-value {
  padding: 5px 20px 5px 30px;
}
</style>

