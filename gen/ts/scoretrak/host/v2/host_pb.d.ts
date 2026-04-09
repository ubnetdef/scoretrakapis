import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb'; // proto import: "google/protobuf/wrappers.proto"
import * as scoretrak_proto_v1_uuid_pb from '../../../scoretrak/proto/v1/uuid_pb'; // proto import: "scoretrak/proto/v1/uuid.proto"
import * as scoretrak_service_v2_service_pb from '../../../scoretrak/service/v2/service_pb'; // proto import: "scoretrak/service/v2/service.proto"


export class Host extends jspb.Message {
  getId(): scoretrak_proto_v1_uuid_pb.UUID | undefined;
  setId(value?: scoretrak_proto_v1_uuid_pb.UUID): Host;
  hasId(): boolean;
  clearId(): Host;

  getAddress(): string;
  setAddress(value: string): Host;

  getHostGroupId(): scoretrak_proto_v1_uuid_pb.UUID | undefined;
  setHostGroupId(value?: scoretrak_proto_v1_uuid_pb.UUID): Host;
  hasHostGroupId(): boolean;
  clearHostGroupId(): Host;

  getTeamId(): scoretrak_proto_v1_uuid_pb.UUID | undefined;
  setTeamId(value?: scoretrak_proto_v1_uuid_pb.UUID): Host;
  hasTeamId(): boolean;
  clearTeamId(): Host;

  getPause(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setPause(value?: google_protobuf_wrappers_pb.BoolValue): Host;
  hasPause(): boolean;
  clearPause(): Host;

  getHide(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setHide(value?: google_protobuf_wrappers_pb.BoolValue): Host;
  hasHide(): boolean;
  clearHide(): Host;

  getEditHost(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setEditHost(value?: google_protobuf_wrappers_pb.BoolValue): Host;
  hasEditHost(): boolean;
  clearEditHost(): Host;

  getServicesList(): Array<scoretrak_service_v2_service_pb.Service>;
  setServicesList(value: Array<scoretrak_service_v2_service_pb.Service>): Host;
  clearServicesList(): Host;
  addServices(value?: scoretrak_service_v2_service_pb.Service, index?: number): scoretrak_service_v2_service_pb.Service;

  getAddressListRange(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAddressListRange(value?: google_protobuf_wrappers_pb.StringValue): Host;
  hasAddressListRange(): boolean;
  clearAddressListRange(): Host;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Host.AsObject;
  static toObject(includeInstance: boolean, msg: Host): Host.AsObject;
  static serializeBinaryToWriter(message: Host, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Host;
  static deserializeBinaryFromReader(message: Host, reader: jspb.BinaryReader): Host;
}

export namespace Host {
  export type AsObject = {
    id?: scoretrak_proto_v1_uuid_pb.UUID.AsObject;
    address: string;
    hostGroupId?: scoretrak_proto_v1_uuid_pb.UUID.AsObject;
    teamId?: scoretrak_proto_v1_uuid_pb.UUID.AsObject;
    pause?: google_protobuf_wrappers_pb.BoolValue.AsObject;
    hide?: google_protobuf_wrappers_pb.BoolValue.AsObject;
    editHost?: google_protobuf_wrappers_pb.BoolValue.AsObject;
    servicesList: Array<scoretrak_service_v2_service_pb.Service.AsObject>;
    addressListRange?: google_protobuf_wrappers_pb.StringValue.AsObject;
  };
}

export class HostServiceGetAllRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HostServiceGetAllRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HostServiceGetAllRequest): HostServiceGetAllRequest.AsObject;
  static serializeBinaryToWriter(message: HostServiceGetAllRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HostServiceGetAllRequest;
  static deserializeBinaryFromReader(message: HostServiceGetAllRequest, reader: jspb.BinaryReader): HostServiceGetAllRequest;
}

export namespace HostServiceGetAllRequest {
  export type AsObject = {
  };
}

export class HostServiceGetAllResponse extends jspb.Message {
  getHostsList(): Array<Host>;
  setHostsList(value: Array<Host>): HostServiceGetAllResponse;
  clearHostsList(): HostServiceGetAllResponse;
  addHosts(value?: Host, index?: number): Host;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HostServiceGetAllResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HostServiceGetAllResponse): HostServiceGetAllResponse.AsObject;
  static serializeBinaryToWriter(message: HostServiceGetAllResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HostServiceGetAllResponse;
  static deserializeBinaryFromReader(message: HostServiceGetAllResponse, reader: jspb.BinaryReader): HostServiceGetAllResponse;
}

export namespace HostServiceGetAllResponse {
  export type AsObject = {
    hostsList: Array<Host.AsObject>;
  };
}

export class HostServiceGetByIDRequest extends jspb.Message {
  getId(): scoretrak_proto_v1_uuid_pb.UUID | undefined;
  setId(value?: scoretrak_proto_v1_uuid_pb.UUID): HostServiceGetByIDRequest;
  hasId(): boolean;
  clearId(): HostServiceGetByIDRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HostServiceGetByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HostServiceGetByIDRequest): HostServiceGetByIDRequest.AsObject;
  static serializeBinaryToWriter(message: HostServiceGetByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HostServiceGetByIDRequest;
  static deserializeBinaryFromReader(message: HostServiceGetByIDRequest, reader: jspb.BinaryReader): HostServiceGetByIDRequest;
}

export namespace HostServiceGetByIDRequest {
  export type AsObject = {
    id?: scoretrak_proto_v1_uuid_pb.UUID.AsObject;
  };
}

export class HostServiceGetByIDResponse extends jspb.Message {
  getHost(): Host | undefined;
  setHost(value?: Host): HostServiceGetByIDResponse;
  hasHost(): boolean;
  clearHost(): HostServiceGetByIDResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HostServiceGetByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HostServiceGetByIDResponse): HostServiceGetByIDResponse.AsObject;
  static serializeBinaryToWriter(message: HostServiceGetByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HostServiceGetByIDResponse;
  static deserializeBinaryFromReader(message: HostServiceGetByIDResponse, reader: jspb.BinaryReader): HostServiceGetByIDResponse;
}

export namespace HostServiceGetByIDResponse {
  export type AsObject = {
    host?: Host.AsObject;
  };
}

export class HostServiceDeleteRequest extends jspb.Message {
  getId(): scoretrak_proto_v1_uuid_pb.UUID | undefined;
  setId(value?: scoretrak_proto_v1_uuid_pb.UUID): HostServiceDeleteRequest;
  hasId(): boolean;
  clearId(): HostServiceDeleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HostServiceDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HostServiceDeleteRequest): HostServiceDeleteRequest.AsObject;
  static serializeBinaryToWriter(message: HostServiceDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HostServiceDeleteRequest;
  static deserializeBinaryFromReader(message: HostServiceDeleteRequest, reader: jspb.BinaryReader): HostServiceDeleteRequest;
}

export namespace HostServiceDeleteRequest {
  export type AsObject = {
    id?: scoretrak_proto_v1_uuid_pb.UUID.AsObject;
  };
}

export class HostServiceDeleteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HostServiceDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HostServiceDeleteResponse): HostServiceDeleteResponse.AsObject;
  static serializeBinaryToWriter(message: HostServiceDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HostServiceDeleteResponse;
  static deserializeBinaryFromReader(message: HostServiceDeleteResponse, reader: jspb.BinaryReader): HostServiceDeleteResponse;
}

export namespace HostServiceDeleteResponse {
  export type AsObject = {
  };
}

export class HostServiceStoreRequest extends jspb.Message {
  getHostsList(): Array<Host>;
  setHostsList(value: Array<Host>): HostServiceStoreRequest;
  clearHostsList(): HostServiceStoreRequest;
  addHosts(value?: Host, index?: number): Host;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HostServiceStoreRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HostServiceStoreRequest): HostServiceStoreRequest.AsObject;
  static serializeBinaryToWriter(message: HostServiceStoreRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HostServiceStoreRequest;
  static deserializeBinaryFromReader(message: HostServiceStoreRequest, reader: jspb.BinaryReader): HostServiceStoreRequest;
}

export namespace HostServiceStoreRequest {
  export type AsObject = {
    hostsList: Array<Host.AsObject>;
  };
}

export class HostServiceStoreResponse extends jspb.Message {
  getIdsList(): Array<scoretrak_proto_v1_uuid_pb.UUID>;
  setIdsList(value: Array<scoretrak_proto_v1_uuid_pb.UUID>): HostServiceStoreResponse;
  clearIdsList(): HostServiceStoreResponse;
  addIds(value?: scoretrak_proto_v1_uuid_pb.UUID, index?: number): scoretrak_proto_v1_uuid_pb.UUID;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HostServiceStoreResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HostServiceStoreResponse): HostServiceStoreResponse.AsObject;
  static serializeBinaryToWriter(message: HostServiceStoreResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HostServiceStoreResponse;
  static deserializeBinaryFromReader(message: HostServiceStoreResponse, reader: jspb.BinaryReader): HostServiceStoreResponse;
}

export namespace HostServiceStoreResponse {
  export type AsObject = {
    idsList: Array<scoretrak_proto_v1_uuid_pb.UUID.AsObject>;
  };
}

export class HostServiceUpdateRequest extends jspb.Message {
  getHost(): Host | undefined;
  setHost(value?: Host): HostServiceUpdateRequest;
  hasHost(): boolean;
  clearHost(): HostServiceUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HostServiceUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HostServiceUpdateRequest): HostServiceUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: HostServiceUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HostServiceUpdateRequest;
  static deserializeBinaryFromReader(message: HostServiceUpdateRequest, reader: jspb.BinaryReader): HostServiceUpdateRequest;
}

export namespace HostServiceUpdateRequest {
  export type AsObject = {
    host?: Host.AsObject;
  };
}

export class HostServiceUpdateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HostServiceUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HostServiceUpdateResponse): HostServiceUpdateResponse.AsObject;
  static serializeBinaryToWriter(message: HostServiceUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HostServiceUpdateResponse;
  static deserializeBinaryFromReader(message: HostServiceUpdateResponse, reader: jspb.BinaryReader): HostServiceUpdateResponse;
}

export namespace HostServiceUpdateResponse {
  export type AsObject = {
  };
}

