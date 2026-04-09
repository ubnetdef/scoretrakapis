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

export class ReportServiceGetRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportServiceGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReportServiceGetRequest): ReportServiceGetRequest.AsObject;
  static serializeBinaryToWriter(message: ReportServiceGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportServiceGetRequest;
  static deserializeBinaryFromReader(message: ReportServiceGetRequest, reader: jspb.BinaryReader): ReportServiceGetRequest;
}

export namespace ReportServiceGetRequest {
  export type AsObject = {
  };
}

export class ReportServiceGetResponse extends jspb.Message {
  getReport(): Report | undefined;
  setReport(value?: Report): ReportServiceGetResponse;
  hasReport(): boolean;
  clearReport(): ReportServiceGetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportServiceGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReportServiceGetResponse): ReportServiceGetResponse.AsObject;
  static serializeBinaryToWriter(message: ReportServiceGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportServiceGetResponse;
  static deserializeBinaryFromReader(message: ReportServiceGetResponse, reader: jspb.BinaryReader): ReportServiceGetResponse;
}

export namespace ReportServiceGetResponse {
  export type AsObject = {
    report?: Report.AsObject;
  };
}

export class ReportServiceGetUnaryRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportServiceGetUnaryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReportServiceGetUnaryRequest): ReportServiceGetUnaryRequest.AsObject;
  static serializeBinaryToWriter(message: ReportServiceGetUnaryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportServiceGetUnaryRequest;
  static deserializeBinaryFromReader(message: ReportServiceGetUnaryRequest, reader: jspb.BinaryReader): ReportServiceGetUnaryRequest;
}

export namespace ReportServiceGetUnaryRequest {
  export type AsObject = {
  };
}

export class ReportServiceGetUnaryResponse extends jspb.Message {
  getReport(): Report | undefined;
  setReport(value?: Report): ReportServiceGetUnaryResponse;
  hasReport(): boolean;
  clearReport(): ReportServiceGetUnaryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportServiceGetUnaryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReportServiceGetUnaryResponse): ReportServiceGetUnaryResponse.AsObject;
  static serializeBinaryToWriter(message: ReportServiceGetUnaryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportServiceGetUnaryResponse;
  static deserializeBinaryFromReader(message: ReportServiceGetUnaryResponse, reader: jspb.BinaryReader): ReportServiceGetUnaryResponse;
}

export namespace ReportServiceGetUnaryResponse {
  export type AsObject = {
    report?: Report.AsObject;
  };
}

