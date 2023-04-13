module.exports = async function(context, messages) {
    messages.forEach((message, index) => {
        context.log(`Processed message ${message}`);
        context.log(`EnqueuedTimeUtc = ${context.bindingData.enqueuedTimeUtcArray[index]}`);
        context.log(`SequenceNumber = ${context.bindingData.sequenceNumberArray[index]}`);
        context.log(`Offset = ${context.bindingData.offsetArray[index]}`);
        });

};

// module.exports = async function(context, messages) {
//     context.log(`Processing ${messages.length} messages`);
//     for (const message of messages) {
//         // Process the message
//         context.log(`Processed message: ${message}`);
//     }
// };