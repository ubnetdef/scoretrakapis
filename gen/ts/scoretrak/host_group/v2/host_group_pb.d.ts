import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb'; // proto import: "google/protobuf/wrappers.proto"
import * as scoretrak_host_v2_host_pb from '../../../scoretrak/host/v2/host_pb'; // proto import: "scoretrak/host/v2/host.proto"
import * as scoretrak_proto_v1_uuid_pb from '../../../scoretrak/proto/v1/uuid_pb'; // proto import: "scoretrak/proto/v1/uuid.proto"


export class HostGroup extends jspb.Message {
  getId(): scoretrak_proto_v1_uuid_pb.UUID | undefined;
  setId(value?: scoretrak_proto_v1_uuid_pb.UUID): HostGroup;
  hasId(): boolean;
  clearId(): HostGroup;

  getName(): string;
  setName(value: string): HostGroup;

  getHide(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setHide(value?: google_protobuf_wrappers_pb.BoolValue): HostGroup;
  hasHide(): boolean;
  clearHide(): HostGroup;

  getPause(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setPause(value?: google_protobuf_wrappers_pb.BoolValue): HostGroup;
  hasPause(): boolean;
  clearPause(): HostGroup;

  getHosts(): scoretrak_host_v2_host_pb.Host | undefined;
  setHosts(value?: scoretrak_host_v2_host_pb.Host): HostGroup;
  hasHosts(): boolean;
  clearHosts(): HostGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HostGroup.AsObject;
  static toObject(includeInstance: boolean, msg: HostGroup): HostGroup.AsObject;
  static serializeBinaryToWriter(message: HostGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HostGroup;
  static deserializeBinaryFromReader(message: HostGroup, reader: jspb.BinaryReader): HostGroup;
}

export namespace HostGroup {
  export type AsObject = {
    id?: scoretrak_proto_v1_uuid_pb.UUID.AsObject;
    name: string;
    hide?: google_protobuf_wrappers_pb.BoolValue.AsObject;
    pause?: google_protobuf_wrappers_pb.BoolValue.AsObject;
    hosts?: scoretrak_host_v2_host_pb.Host.AsObject;
  };
}

export class HostGroupServiceGetAllRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HostGroupServiceGetAllRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HostGroupServiceGetAllRequest): HostGroupServiceGetAllRequest.AsObject;
  static serializeBinaryToWriter(message: HostGroupServiceGetAllRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HostGroupServiceGetAllRequest;
  static deserializeBinaryFromReader(message: HostGroupServiceGetAllRequest, reader: jspb.BinaryReader): HostGroupServiceGetAllRequest;
}

export namespace HostGroupServiceGetAllRequest {
  export type AsObject = {
  };
}

export class HostGroupServiceGetAllResponse extends jspb.Message {
  getHostGroupsList(): Array<HostGroup>;
  setHostGroupsList(value: Array<HostGroup>): HostGroupServiceGetAllResponse;
  clearHostGroupsList(): HostGroupServiceGetAllResponse;
  addHostGroups(value?: HostGroup, index?: number): HostGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HostGroupServiceGetAllResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HostGroupServiceGetAllResponse): HostGroupServiceGetAllResponse.AsObject;
  static serializeBinaryToWriter(message: HostGroupServiceGetAllResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HostGroupServiceGetAllResponse;
  static deserializeBinaryFromReader(message: HostGroupServiceGetAllResponse, reader: jspb.BinaryReader): HostGroupServiceGetAllResponse;
}

export namespace HostGroupServiceGetAllResponse {
  export type AsObject = {
    hostGroupsList: Array<HostGroup.AsObject>;
  };
}

export class HostGroupServiceGetByIDRequest extends jspb.Message {
  getId(): scoretrak_proto_v1_uuid_pb.UUID | undefined;
  setId(value?: scoretrak_proto_v1_uuid_pb.UUID): HostGroupServiceGetByIDRequest;
  hasId(): boolean;
  clearId(): HostGroupServiceGetByIDRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HostGroupServiceGetByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HostGroupServiceGetByIDRequest): HostGroupServiceGetByIDRequest.AsObject;
  static serializeBinaryToWriter(message: HostGroupServiceGetByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HostGroupServiceGetByIDRequest;
  static deserializeBinaryFromReader(message: HostGroupServiceGetByIDRequest, reader: jspb.BinaryReader): HostGroupServiceGetByIDRequest;
}

export namespace HostGroupServiceGetByIDRequest {
  export type AsObject = {
    id?: scoretrak_proto_v1_uuid_pb.UUID.AsObject;
  };
}

export class HostGroupServiceGetByIDResponse extends jspb.Message {
  getHostGroup(): HostGroup | undefined;
  setHostGroup(value?: HostGroup): HostGroupServiceGetByIDResponse;
  hasHostGroup(): boolean;
  clearHostGroup(): HostGroupServiceGetByIDResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HostGroupServiceGetByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HostGroupServiceGetByIDResponse): HostGroupServiceGetByIDResponse.AsObject;
  static serializeBinaryToWriter(message: HostGroupServiceGetByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HostGroupServiceGetByIDResponse;
  static deserializeBinaryFromReader(message: HostGroupServiceGetByIDResponse, reader: jspb.BinaryReader): HostGroupServiceGetByIDResponse;
}

export namespace HostGroupServiceGetByIDResponse {
  export type AsObject = {
    hostGroup?: HostGroup.AsObject;
  };
}

export class HostGroupServiceDeleteRequest extends jspb.Message {
  getId(): scoretrak_proto_v1_uuid_pb.UUID | undefined;
  setId(value?: scoretrak_proto_v1_uuid_pb.UUID): HostGroupServiceDeleteRequest;
  hasId(): boolean;
  clearId(): HostGroupServiceDeleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HostGroupServiceDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HostGroupServiceDeleteRequest): HostGroupServiceDeleteRequest.AsObject;
  static serializeBinaryToWriter(message: HostGroupServiceDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HostGroupServiceDeleteRequest;
  static deserializeBinaryFromReader(message: HostGroupServiceDeleteRequest, reader: jspb.BinaryReader): HostGroupServiceDeleteRequest;
}

export namespace HostGroupServiceDeleteRequest {
  export type AsObject = {
    id?: scoretrak_proto_v1_uuid_pb.UUID.AsObject;
  };
}

export class HostGroupServiceDeleteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HostGroupServiceDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HostGroupServiceDeleteResponse): HostGroupServiceDeleteResponse.AsObject;
  static serializeBinaryToWriter(message: HostGroupServiceDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HostGroupServiceDeleteResponse;
  static deserializeBinaryFromReader(message: HostGroupServiceDeleteResponse, reader: jspb.BinaryReader): HostGroupServiceDeleteResponse;
}

export namespace HostGroupServiceDeleteResponse {
  export type AsObject = {
  };
}

export class HostGroupServiceStoreRequest extends jspb.Message {
  getHostGroupsList(): Array<HostGroup>;
  setHostGroupsList(value: Array<HostGroup>): HostGroupServiceStoreRequest;
  clearHostGroupsList(): HostGroupServiceStoreRequest;
  addHostGroups(value?: HostGroup, index?: number): HostGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HostGroupServiceStoreRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HostGroupServiceStoreRequest): HostGroupServiceStoreRequest.AsObject;
  static serializeBinaryToWriter(message: HostGroupServiceStoreRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HostGroupServiceStoreRequest;
  static deserializeBinaryFromReader(message: HostGroupServiceStoreRequest, reader: jspb.BinaryReader): HostGroupServiceStoreRequest;
}

export namespace HostGroupServiceStoreRequest {
  export type AsObject = {
    hostGroupsList: Array<HostGroup.AsObject>;
  };
}

export class HostGroupServiceStoreResponse extends jspb.Message {
  getIdsList(): Array<scoretrak_proto_v1_uuid_pb.UUID>;
  setIdsList(value: Array<scoretrak_proto_v1_uuid_pb.UUID>): HostGroupServiceStoreResponse;
  clearIdsList(): HostGroupServiceStoreResponse;
  addIds(value?: scoretrak_proto_v1_uuid_pb.UUID, index?: number): scoretrak_proto_v1_uuid_pb.UUID;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HostGroupServiceStoreResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HostGroupServiceStoreResponse): HostGroupServiceStoreResponse.AsObject;
  static serializeBinaryToWriter(message: HostGroupServiceStoreResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HostGroupServiceStoreResponse;
  static deserializeBinaryFromReader(message: HostGroupServiceStoreResponse, reader: jspb.BinaryReader): HostGroupServiceStoreResponse;
}

export namespace HostGroupServiceStoreResponse {
  export type AsObject = {
    idsList: Array<scoretrak_proto_v1_uuid_pb.UUID.AsObject>;
  };
}

export class HostGroupServiceUpdateRequest extends jspb.Message {
  getHostGroup(): HostGroup | undefined;
  setHostGroup(value?: HostGroup): HostGroupServiceUpdateRequest;
  hasHostGroup(): boolean;
  clearHostGroup(): HostGroupServiceUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HostGroupServiceUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HostGroupServiceUpdateRequest): HostGroupServiceUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: HostGroupServiceUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HostGroupServiceUpdateRequest;
  static deserializeBinaryFromReader(message: HostGroupServiceUpdateRequest, reader: jspb.BinaryReader): HostGroupServiceUpdateRequest;
}

export namespace HostGroupServiceUpdateRequest {
  export type AsObject = {
    hostGroup?: HostGroup.AsObject;
  };
}

export class HostGroupServiceUpdateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HostGroupServiceUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HostGroupServiceUpdateResponse): HostGroupServiceUpdateResponse.AsObject;
  static serializeBinaryToWriter(message: HostGroupServiceUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HostGroupServiceUpdateResponse;
  static deserializeBinaryFromReader(message: HostGroupServiceUpdateResponse, reader: jspb.BinaryReader): HostGroupServiceUpdateResponse;
}

export namespace HostGroupServiceUpdateResponse {
  export type AsObject = {
  };
}

