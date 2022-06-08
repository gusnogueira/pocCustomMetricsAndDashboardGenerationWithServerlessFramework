const { metricScope } = require("aws-embedded-metrics");

const generateCustomMetricsFromObject = metricScope(metrics =>
    async (object) => {
      const props = Object.getOwnPropertyNames(object);
      for(const prop of  props) {
        metrics.setNamespace("DashboardTest2") //setando namespace para agrupar as métricas
        metrics.putMetric(prop, object[prop]); //criando a métrica
        metrics.setProperty("RequestId", "422b1569-16f6-4a03-b8f0-fe3fd9b100f9"); //criando um identificador
      }
    });

module.exports.test = async () => {

  let result = {
    createdPositions: Math.floor(Math.random() * (100 - 1)) + 1,
    updatedPositions: Math.floor(Math.random() * (100 - 1)) + 1,
    updatedOrders: Math.floor(Math.random() * (100 - 1)) + 1,
  };

  await generateCustomMetricsFromObject(result);

  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };

};
