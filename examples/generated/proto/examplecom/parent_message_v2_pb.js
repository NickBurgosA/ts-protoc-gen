/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var proto_othercom_external_child_message_pb = require('../../proto/othercom/external_child_message_pb.js');
goog.exportSymbol('proto.examplecom.ParentMessageV2', null, global);
goog.exportSymbol('proto.examplecom.ParentMessageV2.InternalChildMessage', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.examplecom.ParentMessageV2 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.examplecom.ParentMessageV2.repeatedFields_, null);
};
goog.inherits(proto.examplecom.ParentMessageV2, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.examplecom.ParentMessageV2.displayName = 'proto.examplecom.ParentMessageV2';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.examplecom.ParentMessageV2.repeatedFields_ = [3,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.examplecom.ParentMessageV2.prototype.toObject = function(opt_includeInstance) {
  return proto.examplecom.ParentMessageV2.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.examplecom.ParentMessageV2} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.examplecom.ParentMessageV2.toObject = function(includeInstance, msg) {
  var f, obj = {
    internalChildMessage: (f = msg.getInternalChildMessage()) && proto.examplecom.ParentMessageV2.InternalChildMessage.toObject(includeInstance, f),
    optInternalChildMessage: (f = msg.getOptInternalChildMessage()) && proto.examplecom.ParentMessageV2.InternalChildMessage.toObject(includeInstance, f),
    internalChildrenList: jspb.Message.toObjectList(msg.getInternalChildrenList(),
    proto.examplecom.ParentMessageV2.InternalChildMessage.toObject, includeInstance),
    externalChildMessage: (f = msg.getExternalChildMessage()) && proto_othercom_external_child_message_pb.ExternalChildMessage.toObject(includeInstance, f),
    optExternalChildMessage: (f = msg.getOptExternalChildMessage()) && proto_othercom_external_child_message_pb.ExternalChildMessage.toObject(includeInstance, f),
    externalChildrenList: jspb.Message.toObjectList(msg.getExternalChildrenList(),
    proto_othercom_external_child_message_pb.ExternalChildMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.examplecom.ParentMessageV2}
 */
proto.examplecom.ParentMessageV2.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.examplecom.ParentMessageV2;
  return proto.examplecom.ParentMessageV2.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.examplecom.ParentMessageV2} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.examplecom.ParentMessageV2}
 */
proto.examplecom.ParentMessageV2.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.examplecom.ParentMessageV2.InternalChildMessage;
      reader.readMessage(value,proto.examplecom.ParentMessageV2.InternalChildMessage.deserializeBinaryFromReader);
      msg.setInternalChildMessage(value);
      break;
    case 2:
      var value = new proto.examplecom.ParentMessageV2.InternalChildMessage;
      reader.readMessage(value,proto.examplecom.ParentMessageV2.InternalChildMessage.deserializeBinaryFromReader);
      msg.setOptInternalChildMessage(value);
      break;
    case 3:
      var value = new proto.examplecom.ParentMessageV2.InternalChildMessage;
      reader.readMessage(value,proto.examplecom.ParentMessageV2.InternalChildMessage.deserializeBinaryFromReader);
      msg.addInternalChildren(value);
      break;
    case 4:
      var value = new proto_othercom_external_child_message_pb.ExternalChildMessage;
      reader.readMessage(value,proto_othercom_external_child_message_pb.ExternalChildMessage.deserializeBinaryFromReader);
      msg.setExternalChildMessage(value);
      break;
    case 5:
      var value = new proto_othercom_external_child_message_pb.ExternalChildMessage;
      reader.readMessage(value,proto_othercom_external_child_message_pb.ExternalChildMessage.deserializeBinaryFromReader);
      msg.setOptExternalChildMessage(value);
      break;
    case 6:
      var value = new proto_othercom_external_child_message_pb.ExternalChildMessage;
      reader.readMessage(value,proto_othercom_external_child_message_pb.ExternalChildMessage.deserializeBinaryFromReader);
      msg.addExternalChildren(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.examplecom.ParentMessageV2.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.examplecom.ParentMessageV2.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.examplecom.ParentMessageV2} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.examplecom.ParentMessageV2.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInternalChildMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.examplecom.ParentMessageV2.InternalChildMessage.serializeBinaryToWriter
    );
  }
  f = message.getOptInternalChildMessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.examplecom.ParentMessageV2.InternalChildMessage.serializeBinaryToWriter
    );
  }
  f = message.getInternalChildrenList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.examplecom.ParentMessageV2.InternalChildMessage.serializeBinaryToWriter
    );
  }
  f = message.getExternalChildMessage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_othercom_external_child_message_pb.ExternalChildMessage.serializeBinaryToWriter
    );
  }
  f = message.getOptExternalChildMessage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_othercom_external_child_message_pb.ExternalChildMessage.serializeBinaryToWriter
    );
  }
  f = message.getExternalChildrenList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto_othercom_external_child_message_pb.ExternalChildMessage.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.examplecom.ParentMessageV2.InternalChildMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.examplecom.ParentMessageV2.InternalChildMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.examplecom.ParentMessageV2.InternalChildMessage.displayName = 'proto.examplecom.ParentMessageV2.InternalChildMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.examplecom.ParentMessageV2.InternalChildMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.examplecom.ParentMessageV2.InternalChildMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.examplecom.ParentMessageV2.InternalChildMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.examplecom.ParentMessageV2.InternalChildMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    myString: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.examplecom.ParentMessageV2.InternalChildMessage}
 */
proto.examplecom.ParentMessageV2.InternalChildMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.examplecom.ParentMessageV2.InternalChildMessage;
  return proto.examplecom.ParentMessageV2.InternalChildMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.examplecom.ParentMessageV2.InternalChildMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.examplecom.ParentMessageV2.InternalChildMessage}
 */
proto.examplecom.ParentMessageV2.InternalChildMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMyString(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.examplecom.ParentMessageV2.InternalChildMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.examplecom.ParentMessageV2.InternalChildMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.examplecom.ParentMessageV2.InternalChildMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.examplecom.ParentMessageV2.InternalChildMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * required string my_string = 1;
 * @return {string}
 */
proto.examplecom.ParentMessageV2.InternalChildMessage.prototype.getMyString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.examplecom.ParentMessageV2.InternalChildMessage.prototype.setMyString = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.examplecom.ParentMessageV2.InternalChildMessage.prototype.clearMyString = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.ParentMessageV2.InternalChildMessage.prototype.hasMyString = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required InternalChildMessage internal_child_message = 1;
 * @return {!proto.examplecom.ParentMessageV2.InternalChildMessage}
 */
proto.examplecom.ParentMessageV2.prototype.getInternalChildMessage = function() {
  return /** @type{!proto.examplecom.ParentMessageV2.InternalChildMessage} */ (
    jspb.Message.getWrapperField(this, proto.examplecom.ParentMessageV2.InternalChildMessage, 1, 1));
};


/** @param {!proto.examplecom.ParentMessageV2.InternalChildMessage} value */
proto.examplecom.ParentMessageV2.prototype.setInternalChildMessage = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.examplecom.ParentMessageV2.prototype.clearInternalChildMessage = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.ParentMessageV2.prototype.hasInternalChildMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional InternalChildMessage opt_internal_child_message = 2;
 * @return {?proto.examplecom.ParentMessageV2.InternalChildMessage}
 */
proto.examplecom.ParentMessageV2.prototype.getOptInternalChildMessage = function() {
  return /** @type{?proto.examplecom.ParentMessageV2.InternalChildMessage} */ (
    jspb.Message.getWrapperField(this, proto.examplecom.ParentMessageV2.InternalChildMessage, 2));
};


/** @param {?proto.examplecom.ParentMessageV2.InternalChildMessage|undefined} value */
proto.examplecom.ParentMessageV2.prototype.setOptInternalChildMessage = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.examplecom.ParentMessageV2.prototype.clearOptInternalChildMessage = function() {
  this.setOptInternalChildMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.ParentMessageV2.prototype.hasOptInternalChildMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated InternalChildMessage internal_children = 3;
 * @return {!Array.<!proto.examplecom.ParentMessageV2.InternalChildMessage>}
 */
proto.examplecom.ParentMessageV2.prototype.getInternalChildrenList = function() {
  return /** @type{!Array.<!proto.examplecom.ParentMessageV2.InternalChildMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.examplecom.ParentMessageV2.InternalChildMessage, 3));
};


/** @param {!Array.<!proto.examplecom.ParentMessageV2.InternalChildMessage>} value */
proto.examplecom.ParentMessageV2.prototype.setInternalChildrenList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.examplecom.ParentMessageV2.InternalChildMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.examplecom.ParentMessageV2.InternalChildMessage}
 */
proto.examplecom.ParentMessageV2.prototype.addInternalChildren = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.examplecom.ParentMessageV2.InternalChildMessage, opt_index);
};


proto.examplecom.ParentMessageV2.prototype.clearInternalChildrenList = function() {
  this.setInternalChildrenList([]);
};


/**
 * required othercom.ExternalChildMessage external_child_message = 4;
 * @return {!proto.othercom.ExternalChildMessage}
 */
proto.examplecom.ParentMessageV2.prototype.getExternalChildMessage = function() {
  return /** @type{!proto.othercom.ExternalChildMessage} */ (
    jspb.Message.getWrapperField(this, proto_othercom_external_child_message_pb.ExternalChildMessage, 4, 1));
};


/** @param {!proto.othercom.ExternalChildMessage} value */
proto.examplecom.ParentMessageV2.prototype.setExternalChildMessage = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.examplecom.ParentMessageV2.prototype.clearExternalChildMessage = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.ParentMessageV2.prototype.hasExternalChildMessage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional othercom.ExternalChildMessage opt_external_child_message = 5;
 * @return {?proto.othercom.ExternalChildMessage}
 */
proto.examplecom.ParentMessageV2.prototype.getOptExternalChildMessage = function() {
  return /** @type{?proto.othercom.ExternalChildMessage} */ (
    jspb.Message.getWrapperField(this, proto_othercom_external_child_message_pb.ExternalChildMessage, 5));
};


/** @param {?proto.othercom.ExternalChildMessage|undefined} value */
proto.examplecom.ParentMessageV2.prototype.setOptExternalChildMessage = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.examplecom.ParentMessageV2.prototype.clearOptExternalChildMessage = function() {
  this.setOptExternalChildMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.ParentMessageV2.prototype.hasOptExternalChildMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated othercom.ExternalChildMessage external_children = 6;
 * @return {!Array.<!proto.othercom.ExternalChildMessage>}
 */
proto.examplecom.ParentMessageV2.prototype.getExternalChildrenList = function() {
  return /** @type{!Array.<!proto.othercom.ExternalChildMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_othercom_external_child_message_pb.ExternalChildMessage, 6));
};


/** @param {!Array.<!proto.othercom.ExternalChildMessage>} value */
proto.examplecom.ParentMessageV2.prototype.setExternalChildrenList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.othercom.ExternalChildMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.othercom.ExternalChildMessage}
 */
proto.examplecom.ParentMessageV2.prototype.addExternalChildren = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.othercom.ExternalChildMessage, opt_index);
};


proto.examplecom.ParentMessageV2.prototype.clearExternalChildrenList = function() {
  this.setExternalChildrenList([]);
};


goog.object.extend(exports, proto.examplecom);
