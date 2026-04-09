import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb'; // proto import: "google/protobuf/wrappers.proto"
import * as scoretrak_proto_v1_uuid_pb from '../../../scoretrak/proto/v1/uuid_pb'; // proto import: "scoretrak/proto/v1/uuid.proto"
import * as scoretrak_service_v2_service_pb from '../../../scoretrak/service/v2/service_pb'; // proto import: "scoretrak/service/v2/service.proto"


export class ServiceGroup extends jspb.Message {
  getId(): scoretrak_proto_v1_uuid_pb.UUID | undefined;
  setId(value?: scoretrak_proto_v1_uuid_pb.UUID): ServiceGroup;
  hasId(): boolean;
  clearId(): ServiceGroup;

  getName(): string;
  setName(value: string): ServiceGroup;

  getDisplayName(): string;
  setDisplayName(value: string): ServiceGroup;

  getEnabled(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setEnabled(value?: google_protobuf_wrappers_pb.BoolValue): ServiceGroup;
  hasEnabled(): boolean;
  clearEnabled(): ServiceGroup;

  getSkipHelper(): boolean;
  setSkipHelper(value: boolean): ServiceGroup;

  getLabel(): string;
  setLabel(value: string): ServiceGroup;

  getServicesList(): Array<scoretrak_service_v2_service_pb.Service>;
  setServicesList(value: Array<scoretrak_service_v2_service_pb.Service>): ServiceGroup;
  clearServicesList(): ServiceGroup;
  addServices(value?: scoretrak_service_v2_service_pb.Service, index?: number): scoretrak_service_v2_service_pb.Service;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceGroup.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceGroup): ServiceGroup.AsObject;
  static serializeBinaryToWriter(message: ServiceGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceGroup;
  static deserializeBinaryFromReader(message: ServiceGroup, reader: jspb.BinaryReader): ServiceGroup;
}

export namespace ServiceGroup {
  export type AsObject = {
    id?: scoretrak_proto_v1_uuid_pb.UUID.AsObject;
    name: string;
    displayName: string;
    enabled?: google_protobuf_wrappers_pb.BoolValue.AsObject;
    skipHelper: boolean;
    label: string;
    servicesList: Array<scoretrak_service_v2_service_pb.Service.AsObject>;
  };
}

export class ServiceGroupServiceGetAllRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceGroupServiceGetAllRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceGroupServiceGetAllRequest): ServiceGroupServiceGetAllRequest.AsObject;
  static serializeBinaryToWriter(message: ServiceGroupServiceGetAllRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceGroupServiceGetAllRequest;
  static deserializeBinaryFromReader(message: ServiceGroupServiceGetAllRequest, reader: jspb.BinaryReader): ServiceGroupServiceGetAllRequest;
}

export namespace ServiceGroupServiceGetAllRequest {
  export type AsObject = {
  };
}

export class ServiceGroupServiceGetAllResponse extends jspb.Message {
  getServiceGroupsList(): Array<ServiceGroup>;
  setServiceGroupsList(value: Array<ServiceGroup>): ServiceGroupServiceGetAllResponse;
  clearServiceGroupsList(): ServiceGroupServiceGetAllResponse;
  addServiceGroups(value?: ServiceGroup, index?: number): ServiceGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceGroupServiceGetAllResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceGroupServiceGetAllResponse): ServiceGroupServiceGetAllResponse.AsObject;
  static serializeBinaryToWriter(message: ServiceGroupServiceGetAllResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceGroupServiceGetAllResponse;
  static deserializeBinaryFromReader(message: ServiceGroupServiceGetAllResponse, reader: jspb.BinaryReader): ServiceGroupServiceGetAllResponse;
}

export namespace ServiceGroupServiceGetAllResponse {
  export type AsObject = {
    serviceGroupsList: Array<ServiceGroup.AsObject>;
  };
}

export class ServiceGroupServiceGetByIDRequest extends jspb.Message {
  getId(): scoretrak_proto_v1_uuid_pb.UUID | undefined;
  setId(value?: scoretrak_proto_v1_uuid_pb.UUID): ServiceGroupServiceGetByIDRequest;
  hasId(): boolean;
  clearId(): ServiceGroupServiceGetByIDRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceGroupServiceGetByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceGroupServiceGetByIDRequest): ServiceGroupServiceGetByIDRequest.AsObject;
  static serializeBinaryToWriter(message: ServiceGroupServiceGetByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceGroupServiceGetByIDRequest;
  static deserializeBinaryFromReader(message: ServiceGroupServiceGetByIDRequest, reader: jspb.BinaryReader): ServiceGroupServiceGetByIDRequest;
}

export namespace ServiceGroupServiceGetByIDRequest {
  export type AsObject = {
    id?: scoretrak_proto_v1_uuid_pb.UUID.AsObject;
  };
}

export class ServiceGroupServiceGetByIDResponse extends jspb.Message {
  getServiceGroup(): ServiceGroup | undefined;
  setServiceGroup(value?: ServiceGroup): ServiceGroupServiceGetByIDResponse;
  hasServiceGroup(): boolean;
  clearServiceGroup(): ServiceGroupServiceGetByIDResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceGroupServiceGetByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceGroupServiceGetByIDResponse): ServiceGroupServiceGetByIDResponse.AsObject;
  static serializeBinaryToWriter(message: ServiceGroupServiceGetByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceGroupServiceGetByIDResponse;
  static deserializeBinaryFromReader(message: ServiceGroupServiceGetByIDResponse, reader: jspb.BinaryReader): ServiceGroupServiceGetByIDResponse;
}

export namespace ServiceGroupServiceGetByIDResponse {
  export type AsObject = {
    serviceGroup?: ServiceGroup.AsObject;
  };
}

export class ServiceGroupServiceDeleteRequest extends jspb.Message {
  getId(): scoretrak_proto_v1_uuid_pb.UUID | undefined;
  setId(value?: scoretrak_proto_v1_uuid_pb.UUID): ServiceGroupServiceDeleteRequest;
  hasId(): boolean;
  clearId(): ServiceGroupServiceDeleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceGroupServiceDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceGroupServiceDeleteRequest): ServiceGroupServiceDeleteRequest.AsObject;
  static serializeBinaryToWriter(message: ServiceGroupServiceDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceGroupServiceDeleteRequest;
  static deserializeBinaryFromReader(message: ServiceGroupServiceDeleteRequest, reader: jspb.BinaryReader): ServiceGroupServiceDeleteRequest;
}

export namespace ServiceGroupServiceDeleteRequest {
  export type AsObject = {
    id?: scoretrak_proto_v1_uuid_pb.UUID.AsObject;
  };
}

export class ServiceGroupServiceDeleteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceGroupServiceDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceGroupServiceDeleteResponse): ServiceGroupServiceDeleteResponse.AsObject;
  static serializeBinaryToWriter(message: ServiceGroupServiceDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceGroupServiceDeleteResponse;
  static deserializeBinaryFromReader(message: ServiceGroupServiceDeleteResponse, reader: jspb.BinaryReader): ServiceGroupServiceDeleteResponse;
}

export namespace ServiceGroupServiceDeleteResponse {
  export type AsObject = {
  };
}

export class ServiceGroupServiceStoreRequest extends jspb.Message {
  getServiceGroup(): ServiceGroup | undefined;
  setServiceGroup(value?: ServiceGroup): ServiceGroupServiceStoreRequest;
  hasServiceGroup(): boolean;
  clearServiceGroup(): ServiceGroupServiceStoreRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceGroupServiceStoreRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceGroupServiceStoreRequest): ServiceGroupServiceStoreRequest.AsObject;
  static serializeBinaryToWriter(message: ServiceGroupServiceStoreRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceGroupServiceStoreRequest;
  static deserializeBinaryFromReader(message: ServiceGroupServiceStoreRequest, reader: jspb.BinaryReader): ServiceGroupServiceStoreRequest;
}

export namespace ServiceGroupServiceStoreRequest {
  export type AsObject = {
    serviceGroup?: ServiceGroup.AsObject;
  };
}

export class ServiceGroupServiceStoreResponse extends jspb.Message {
  getId(): scoretrak_proto_v1_uuid_pb.UUID | undefined;
  setId(value?: scoretrak_proto_v1_uuid_pb.UUID): ServiceGroupServiceStoreResponse;
  hasId(): boolean;
  clearId(): ServiceGroupServiceStoreResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceGroupServiceStoreResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceGroupServiceStoreResponse): ServiceGroupServiceStoreResponse.AsObject;
  static serializeBinaryToWriter(message: ServiceGroupServiceStoreResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceGroupServiceStoreResponse;
  static deserializeBinaryFromReader(message: ServiceGroupServiceStoreResponse, reader: jspb.BinaryReader): ServiceGroupServiceStoreResponse;
}

export namespace ServiceGroupServiceStoreResponse {
  export type AsObject = {
    id?: scoretrak_proto_v1_uuid_pb.UUID.AsObject;
  };
}

export class ServiceGroupServiceUpdateRequest extends jspb.Message {
  getServiceGroup(): ServiceGroup | undefined;
  setServiceGroup(value?: ServiceGroup): ServiceGroupServiceUpdateRequest;
  hasServiceGroup(): boolean;
  clearServiceGroup(): ServiceGroupServiceUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceGroupServiceUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceGroupServiceUpdateRequest): ServiceGroupServiceUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: ServiceGroupServiceUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceGroupServiceUpdateRequest;
  static deserializeBinaryFromReader(message: ServiceGroupServiceUpdateRequest, reader: jspb.BinaryReader): ServiceGroupServiceUpdateRequest;
}

export namespace ServiceGroupServiceUpdateRequest {
  export type AsObject = {
    serviceGroup?: ServiceGroup.AsObject;
  };
}

export class ServiceGroupServiceUpdateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceGroupServiceUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceGroupServiceUpdateResponse): ServiceGroupServiceUpdateResponse.AsObject;
  static serializeBinaryToWriter(message: ServiceGroupServiceUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceGroupServiceUpdateResponse;
  static deserializeBinaryFromReader(message: ServiceGroupServiceUpdateResponse, reader: jspb.BinaryReader): ServiceGroupServiceUpdateResponse;
}

export namespace ServiceGroupServiceUpdateResponse {
  export type AsObject = {
  };
}

export class ServiceGroupServiceRedeployRequest extends jspb.Message {
  getId(): scoretrak_proto_v1_uuid_pb.UUID | undefined;
  setId(value?: scoretrak_proto_v1_uuid_pb.UUID): ServiceGroupServiceRedeployRequest;
  hasId(): boolean;
  clearId(): ServiceGroupServiceRedeployRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceGroupServiceRedeployRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceGroupServiceRedeployRequest): ServiceGroupServiceRedeployRequest.AsObject;
  static serializeBinaryToWriter(message: ServiceGroupServiceRedeployRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceGroupServiceRedeployRequest;
  static deserializeBinaryFromReader(message: ServiceGroupServiceRedeployRequest, reader: jspb.BinaryReader): ServiceGroupServiceRedeployRequest;
}

export namespace ServiceGroupServiceRedeployRequest {
  export type AsObject = {
    id?: scoretrak_proto_v1_uuid_pb.UUID.AsObject;
  };
}

export class ServiceGroupServiceRedeployResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceGroupServiceRedeployResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceGroupServiceRedeployResponse): ServiceGroupServiceRedeployResponse.AsObject;
  static serializeBinaryToWriter(message: ServiceGroupServiceRedeployResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceGroupServiceRedeployResponse;
  static deserializeBinaryFromReader(message: ServiceGroupServiceRedeployResponse, reader: jspb.BinaryReader): ServiceGroupServiceRedeployResponse;
}

export namespace ServiceGroupServiceRedeployResponse {
  export type AsObject = {
  };
}

