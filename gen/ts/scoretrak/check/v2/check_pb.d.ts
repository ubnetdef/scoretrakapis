import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb'; // proto import: "google/protobuf/wrappers.proto"
import * as scoretrak_proto_v1_uuid_pb from '../../../scoretrak/proto/v1/uuid_pb'; // proto import: "scoretrak/proto/v1/uuid.proto"


export class Check extends jspb.Message {
  getServiceId(): scoretrak_proto_v1_uuid_pb.UUID | undefined;
  setServiceId(value?: scoretrak_proto_v1_uuid_pb.UUID): Check;
  hasServiceId(): boolean;
  clearServiceId(): Check;

  getRoundId(): number;
  setRoundId(value: number): Check;

  getLog(): string;
  setLog(value: string): Check;

  getErr(): string;
  setErr(value: string): Check;

  getPassed(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setPassed(value?: google_protobuf_wrappers_pb.BoolValue): Check;
  hasPassed(): boolean;
  clearPassed(): Check;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Check.AsObject;
  static toObject(includeInstance: boolean, msg: Check): Check.AsObject;
  static serializeBinaryToWriter(message: Check, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Check;
  static deserializeBinaryFromReader(message: Check, reader: jspb.BinaryReader): Check;
}

export namespace Check {
  export type AsObject = {
    serviceId?: scoretrak_proto_v1_uuid_pb.UUID.AsObject;
    roundId: number;
    log: string;
    err: string;
    passed?: google_protobuf_wrappers_pb.BoolValue.AsObject;
  };
}

export class CheckServiceGetAllByRoundIDRequest extends jspb.Message {
  getRoundId(): number;
  setRoundId(value: number): CheckServiceGetAllByRoundIDRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckServiceGetAllByRoundIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckServiceGetAllByRoundIDRequest): CheckServiceGetAllByRoundIDRequest.AsObject;
  static serializeBinaryToWriter(message: CheckServiceGetAllByRoundIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckServiceGetAllByRoundIDRequest;
  static deserializeBinaryFromReader(message: CheckServiceGetAllByRoundIDRequest, reader: jspb.BinaryReader): CheckServiceGetAllByRoundIDRequest;
}

export namespace CheckServiceGetAllByRoundIDRequest {
  export type AsObject = {
    roundId: number;
  };
}

export class CheckServiceGetAllByRoundIDResponse extends jspb.Message {
  getChecksList(): Array<Check>;
  setChecksList(value: Array<Check>): CheckServiceGetAllByRoundIDResponse;
  clearChecksList(): CheckServiceGetAllByRoundIDResponse;
  addChecks(value?: Check, index?: number): Check;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckServiceGetAllByRoundIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckServiceGetAllByRoundIDResponse): CheckServiceGetAllByRoundIDResponse.AsObject;
  static serializeBinaryToWriter(message: CheckServiceGetAllByRoundIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckServiceGetAllByRoundIDResponse;
  static deserializeBinaryFromReader(message: CheckServiceGetAllByRoundIDResponse, reader: jspb.BinaryReader): CheckServiceGetAllByRoundIDResponse;
}

export namespace CheckServiceGetAllByRoundIDResponse {
  export type AsObject = {
    checksList: Array<Check.AsObject>;
  };
}

export class CheckServiceGetByRoundServiceIDRequest extends jspb.Message {
  getServiceId(): scoretrak_proto_v1_uuid_pb.UUID | undefined;
  setServiceId(value?: scoretrak_proto_v1_uuid_pb.UUID): CheckServiceGetByRoundServiceIDRequest;
  hasServiceId(): boolean;
  clearServiceId(): CheckServiceGetByRoundServiceIDRequest;

  getRoundId(): number;
  setRoundId(value: number): CheckServiceGetByRoundServiceIDRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckServiceGetByRoundServiceIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckServiceGetByRoundServiceIDRequest): CheckServiceGetByRoundServiceIDRequest.AsObject;
  static serializeBinaryToWriter(message: CheckServiceGetByRoundServiceIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckServiceGetByRoundServiceIDRequest;
  static deserializeBinaryFromReader(message: CheckServiceGetByRoundServiceIDRequest, reader: jspb.BinaryReader): CheckServiceGetByRoundServiceIDRequest;
}

export namespace CheckServiceGetByRoundServiceIDRequest {
  export type AsObject = {
    serviceId?: scoretrak_proto_v1_uuid_pb.UUID.AsObject;
    roundId: number;
  };
}

export class CheckServiceGetByRoundServiceIDResponse extends jspb.Message {
  getCheck(): Check | undefined;
  setCheck(value?: Check): CheckServiceGetByRoundServiceIDResponse;
  hasCheck(): boolean;
  clearCheck(): CheckServiceGetByRoundServiceIDResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckServiceGetByRoundServiceIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckServiceGetByRoundServiceIDResponse): CheckServiceGetByRoundServiceIDResponse.AsObject;
  static serializeBinaryToWriter(message: CheckServiceGetByRoundServiceIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckServiceGetByRoundServiceIDResponse;
  static deserializeBinaryFromReader(message: CheckServiceGetByRoundServiceIDResponse, reader: jspb.BinaryReader): CheckServiceGetByRoundServiceIDResponse;
}

export namespace CheckServiceGetByRoundServiceIDResponse {
  export type AsObject = {
    check?: Check.AsObject;
  };
}

export class CheckServiceGetAllByServiceIDRequest extends jspb.Message {
  getServiceId(): scoretrak_proto_v1_uuid_pb.UUID | undefined;
  setServiceId(value?: scoretrak_proto_v1_uuid_pb.UUID): CheckServiceGetAllByServiceIDRequest;
  hasServiceId(): boolean;
  clearServiceId(): CheckServiceGetAllByServiceIDRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckServiceGetAllByServiceIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckServiceGetAllByServiceIDRequest): CheckServiceGetAllByServiceIDRequest.AsObject;
  static serializeBinaryToWriter(message: CheckServiceGetAllByServiceIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckServiceGetAllByServiceIDRequest;
  static deserializeBinaryFromReader(message: CheckServiceGetAllByServiceIDRequest, reader: jspb.BinaryReader): CheckServiceGetAllByServiceIDRequest;
}

export namespace CheckServiceGetAllByServiceIDRequest {
  export type AsObject = {
    serviceId?: scoretrak_proto_v1_uuid_pb.UUID.AsObject;
  };
}

export class CheckServiceGetAllByServiceIDResponse extends jspb.Message {
  getChecksList(): Array<Check>;
  setChecksList(value: Array<Check>): CheckServiceGetAllByServiceIDResponse;
  clearChecksList(): CheckServiceGetAllByServiceIDResponse;
  addChecks(value?: Check, index?: number): Check;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckServiceGetAllByServiceIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckServiceGetAllByServiceIDResponse): CheckServiceGetAllByServiceIDResponse.AsObject;
  static serializeBinaryToWriter(message: CheckServiceGetAllByServiceIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckServiceGetAllByServiceIDResponse;
  static deserializeBinaryFromReader(message: CheckServiceGetAllByServiceIDResponse, reader: jspb.BinaryReader): CheckServiceGetAllByServiceIDResponse;
}

export namespace CheckServiceGetAllByServiceIDResponse {
  export type AsObject = {
    checksList: Array<Check.AsObject>;
  };
}

