const dashboard = {
    widgets: [
      {
        //métrica padrão
        type: 'metric',
        x: 0,
        y: 0,
        width: 6,
        height: 6,
        properties: {
          metrics:[
            [
               "AWS/Lambda",
               "Invocations",
               "FunctionName",
               "poc-metricas-dev-test"
            ]
           ],
           period: 3600,
           stat: "Sum",
           region: "sa-east-1",
           title: "Events: Invocations",
           view: "timeSeries",
        },
      },
      {
        //métrica customizada
        type: 'metric',
        x: 6,
        y: 0,
        width: 6,
        height: 6,
        properties: {
          metrics:[
            [
               "DashboardTest2", //aqui é o namespace... Deve ser o mesmo setado na função de criação da custom metric
               "createdPositions",
               "ServiceName", //é necessario passar o ServiceName para custom metrics
               "poc-metricas-dev-test",
               "LogGroup",//é necessario passar o LogGroup para custom metrics
               "poc-metricas-dev-test",
               "ServiceType",//é necessario passar o ServiceType para custom metrics
               "AWS::Lambda::Function"
            ]
           ],
           period: 300,
           stat: "Average",
           region: "sa-east-1",
           title: "Events: createdPositions",
           view: "timeSeries",
        },
      },
      {
        type: 'metric',
        x: 12,
        y: 0,
        width: 6,
        height: 3,
        properties: {
          metrics:[
            [
               "DashboardTest2",
               "createdPositions",
               "ServiceName",
               "poc-metricas-dev-test",
               "LogGroup",
               "poc-metricas-dev-test",
               "ServiceType",
               "AWS::Lambda::Function"
            ]
           ],
           period: 86400,
           stat: "Sum",
           region: "sa-east-1",
           title: "Total de Posições Criadas",
           view: "singleValue",
        },
      },
    ],
  }
  
  module.exports.toString = () => JSON.stringify(dashboard)