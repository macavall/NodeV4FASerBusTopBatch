# NodeV4FASerBusTopBatch
Service Bus Trigger executing Service Bus Topic messages in batch

### Executing Service Bus Topic Messages in Batch using Node.JS Function App
- Main needed configurations for **Batched Execution**
  - `function.json` requires `"cardinality": "many"`
    ``` Json
    {
      "bindings": [
        {
          "name": "messages",
          "type": "serviceBusTrigger",
          "direction": "in",
          "topicName": "topic",
          "cardinality": "many",
          "dataType": "string",
          "subscriptionName": "subscription",
          "connection": "serbus56hub_SERVICEBUS"
        }
      ]
    }
    ```

  - `index.js` would look like this:

    ``` JavaScript
    module.exports = async function(context, messages) {
    messages.forEach((message, index) => {
        context.log(`Processed message ${message}`);
        context.log(`EnqueuedTimeUtc = ${context.bindingData.enqueuedTimeUtcArray[index]}`);
        context.log(`SequenceNumber = ${context.bindingData.sequenceNumberArray[index]}`);
        context.log(`Offset = ${context.bindingData.offsetArray[index]}`);
        });
    };
    ```
