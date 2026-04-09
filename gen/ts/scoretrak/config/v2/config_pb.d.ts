import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb'; // proto import: "google/protobuf/wrappers.proto"


export class DynamicConfig extends jspb.Message {
  getRoundDuration(): number;
  setRoundDuration(value: number): DynamicConfig;

  getEnabled(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setEnabled(value?: google_protobuf_wrappers_pb.BoolValue): DynamicConfig;
  hasEnabled(): boolean;
  clearEnabled(): DynamicConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynamicConfig.AsObject;
  static toObject(includeInstance: boolean, msg: DynamicConfig): DynamicConfig.AsObject;
  static serializeBinaryToWriter(message: DynamicConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynamicConfig;
  static deserializeBinaryFromReader(message: DynamicConfig, reader: jspb.BinaryReader): DynamicConfig;
}

export namespace DynamicConfig {
  export type AsObject = {
    roundDuration: number;
    enabled?: google_protobuf_wrappers_pb.BoolValue.AsObject;
  };
}

export class DynamicConfigServiceGetRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynamicConfigServiceGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DynamicConfigServiceGetRequest): DynamicConfigServiceGetRequest.AsObject;
  static serializeBinaryToWriter(message: DynamicConfigServiceGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynamicConfigServiceGetRequest;
  static deserializeBinaryFromReader(message: DynamicConfigServiceGetRequest, reader: jspb.BinaryReader): DynamicConfigServiceGetRequest;
}

export namespace DynamicConfigServiceGetRequest {
  export type AsObject = {
  };
}

export class DynamicConfigServiceGetResponse extends jspb.Message {
  getDynamicConfig(): DynamicConfig | undefined;
  setDynamicConfig(value?: DynamicConfig): DynamicConfigServiceGetResponse;
  hasDynamicConfig(): boolean;
  clearDynamicConfig(): DynamicConfigServiceGetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynamicConfigServiceGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DynamicConfigServiceGetResponse): DynamicConfigServiceGetResponse.AsObject;
  static serializeBinaryToWriter(message: DynamicConfigServiceGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynamicConfigServiceGetResponse;
  static deserializeBinaryFromReader(message: DynamicConfigServiceGetResponse, reader: jspb.BinaryReader): DynamicConfigServiceGetResponse;
}

export namespace DynamicConfigServiceGetResponse {
  export type AsObject = {
    dynamicConfig?: DynamicConfig.AsObject;
  };
}

export class DynamicConfigServiceUpdateRequest extends jspb.Message {
  getDynamicConfig(): DynamicConfig | undefined;
  setDynamicConfig(value?: DynamicConfig): DynamicConfigServiceUpdateRequest;
  hasDynamicConfig(): boolean;
  clearDynamicConfig(): DynamicConfigServiceUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynamicConfigServiceUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DynamicConfigServiceUpdateRequest): DynamicConfigServiceUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: DynamicConfigServiceUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynamicConfigServiceUpdateRequest;
  static deserializeBinaryFromReader(message: DynamicConfigServiceUpdateRequest, reader: jspb.BinaryReader): DynamicConfigServiceUpdateRequest;
}

export namespace DynamicConfigServiceUpdateRequest {
  export type AsObject = {
    dynamicConfig?: DynamicConfig.AsObject;
  };
}

export class DynamicConfigServiceUpdateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynamicConfigServiceUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DynamicConfigServiceUpdateResponse): DynamicConfigServiceUpdateResponse.AsObject;
  static serializeBinaryToWriter(message: DynamicConfigServiceUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynamicConfigServiceUpdateResponse;
  static deserializeBinaryFromReader(message: DynamicConfigServiceUpdateResponse, reader: jspb.BinaryReader): DynamicConfigServiceUpdateResponse;
}

export namespace DynamicConfigServiceUpdateResponse {
  export type AsObject = {
  };
}

export class StaticConfigServiceGetRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StaticConfigServiceGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StaticConfigServiceGetRequest): StaticConfigServiceGetRequest.AsObject;
  static serializeBinaryToWriter(message: StaticConfigServiceGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StaticConfigServiceGetRequest;
  static deserializeBinaryFromReader(message: StaticConfigServiceGetRequest, reader: jspb.BinaryReader): StaticConfigServiceGetRequest;
}

export namespace StaticConfigServiceGetRequest {
  export type AsObject = {
  };
}

export class StaticConfigServiceGetResponse extends jspb.Message {
  getStaticConfig(): string;
  setStaticConfig(value: string): StaticConfigServiceGetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StaticConfigServiceGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StaticConfigServiceGetResponse): StaticConfigServiceGetResponse.AsObject;
  static serializeBinaryToWriter(message: StaticConfigServiceGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StaticConfigServiceGetResponse;
  static deserializeBinaryFromReader(message: StaticConfigServiceGetResponse, reader: jspb.BinaryReader): StaticConfigServiceGetResponse;
}

export namespace StaticConfigServiceGetResponse {
  export type AsObject = {
    staticConfig: string;
  };
}

