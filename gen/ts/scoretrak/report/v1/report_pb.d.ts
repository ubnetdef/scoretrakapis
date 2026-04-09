import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class Report extends jspb.Message {
  getCache(): string;
  setCache(value: string): Report;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Report;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Report;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Report.AsObject;
  static toObject(includeInstance: boolean, msg: Report): Report.AsObject;
  static serializeBinaryToWriter(message: Report, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Report;
  static deserializeBinaryFromReader(message: Report, reader: jspb.BinaryReader): Report;
}

export namespace Report {
  export type AsObject = {
    cache: string;
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class GetRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRequest): GetRequest.AsObject;
  static serializeBinaryToWriter(message: GetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRequest;
  static deserializeBinaryFromReader(message: GetRequest, reader: jspb.BinaryReader): GetRequest;
}

export namespace GetRequest {
  export type AsObject = {
  };
}

export class GetResponse extends jspb.Message {
  getReport(): Report | undefined;
  setReport(value?: Report): GetResponse;
  hasReport(): boolean;
  clearReport(): GetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResponse): GetResponse.AsObject;
  static serializeBinaryToWriter(message: GetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResponse;
  static deserializeBinaryFromReader(message: GetResponse, reader: jspb.BinaryReader): GetResponse;
}

export namespace GetResponse {
  export type AsObject = {
    report?: Report.AsObject;
  };
}

export class GetUnaryRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUnaryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUnaryRequest): GetUnaryRequest.AsObject;
  static serializeBinaryToWriter(message: GetUnaryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUnaryRequest;
  static deserializeBinaryFromReader(message: GetUnaryRequest, reader: jspb.BinaryReader): GetUnaryRequest;
}

export namespace GetUnaryRequest {
  export type AsObject = {
  };
}

export class GetUnaryResponse extends jspb.Message {
  getReport(): Report | undefined;
  setReport(value?: Report): GetUnaryResponse;
  hasReport(): boolean;
  clearReport(): GetUnaryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUnaryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUnaryResponse): GetUnaryResponse.AsObject;
  static serializeBinaryToWriter(message: GetUnaryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUnaryResponse;
  static deserializeBinaryFromReader(message: GetUnaryResponse, reader: jspb.BinaryReader): GetUnaryResponse;
}

export namespace GetUnaryResponse {
  export type AsObject = {
    report?: Report.AsObject;
  };
}

