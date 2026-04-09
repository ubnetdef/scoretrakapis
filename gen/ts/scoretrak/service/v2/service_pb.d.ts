import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb'; // proto import: "google/protobuf/wrappers.proto"
import * as scoretrak_check_v2_check_pb from '../../../scoretrak/check/v2/check_pb'; // proto import: "scoretrak/check/v2/check.proto"
import * as scoretrak_property_v2_property_pb from '../../../scoretrak/property/v2/property_pb'; // proto import: "scoretrak/property/v2/property.proto"
import * as scoretrak_proto_v1_uuid_pb from '../../../scoretrak/proto/v1/uuid_pb'; // proto import: "scoretrak/proto/v1/uuid.proto"


export class Service extends jspb.Message {
  getId(): scoretrak_proto_v1_uuid_pb.UUID | undefined;
  setId(value?: scoretrak_proto_v1_uuid_pb.UUID): Service;
  hasId(): boolean;
  clearId(): Service;

  getName(): string;
  setName(value: string): Service;

  getDisplayName(): string;
  setDisplayName(value: string): Service;

  getWeight(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setWeight(value?: google_protobuf_wrappers_pb.UInt64Value): Service;
  hasWeight(): boolean;
  clearWeight(): Service;

  getPointsBoost(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setPointsBoost(value?: google_protobuf_wrappers_pb.UInt64Value): Service;
  hasPointsBoost(): boolean;
  clearPointsBoost(): Service;

  getRoundUnits(): number;
  setRoundUnits(value: number): Service;

  getRoundDelay(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setRoundDelay(value?: google_protobuf_wrappers_pb.UInt64Value): Service;
  hasRoundDelay(): boolean;
  clearRoundDelay(): Service;

  getServiceGroupId(): scoretrak_proto_v1_uuid_pb.UUID | undefined;
  setServiceGroupId(value?: scoretrak_proto_v1_uuid_pb.UUID): Service;
  hasServiceGroupId(): boolean;
  clearServiceGroupId(): Service;

  getHostId(): scoretrak_proto_v1_uuid_pb.UUID | undefined;
  setHostId(value?: scoretrak_proto_v1_uuid_pb.UUID): Service;
  hasHostId(): boolean;
  clearHostId(): Service;

  getHide(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setHide(value?: google_protobuf_wrappers_pb.BoolValue): Service;
  hasHide(): boolean;
  clearHide(): Service;

  getPause(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setPause(value?: google_protobuf_wrappers_pb.BoolValue): Service;
  hasPause(): boolean;
  clearPause(): Service;

  getPropertiesList(): Array<scoretrak_property_v2_property_pb.Property>;
  setPropertiesList(value: Array<scoretrak_property_v2_property_pb.Property>): Service;
  clearPropertiesList(): Service;
  addProperties(value?: scoretrak_property_v2_property_pb.Property, index?: number): scoretrak_property_v2_property_pb.Property;

  getChecksList(): Array<scoretrak_check_v2_check_pb.Check>;
  setChecksList(value: Array<scoretrak_check_v2_check_pb.Check>): Service;
  clearChecksList(): Service;
  addChecks(value?: scoretrak_check_v2_check_pb.Check, index?: number): scoretrak_check_v2_check_pb.Check;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Service.AsObject;
  static toObject(includeInstance: boolean, msg: Service): Service.AsObject;
  static serializeBinaryToWriter(message: Service, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Service;
  static deserializeBinaryFromReader(message: Service, reader: jspb.BinaryReader): Service;
}

export namespace Service {
  export type AsObject = {
    id?: scoretrak_proto_v1_uuid_pb.UUID.AsObject;
    name: string;
    displayName: string;
    weight?: google_protobuf_wrappers_pb.UInt64Value.AsObject;
    pointsBoost?: google_protobuf_wrappers_pb.UInt64Value.AsObject;
    roundUnits: number;
    roundDelay?: google_protobuf_wrappers_pb.UInt64Value.AsObject;
    serviceGroupId?: scoretrak_proto_v1_uuid_pb.UUID.AsObject;
    hostId?: scoretrak_proto_v1_uuid_pb.UUID.AsObject;
    hide?: google_protobuf_wrappers_pb.BoolValue.AsObject;
    pause?: google_protobuf_wrappers_pb.BoolValue.AsObject;
    propertiesList: Array<scoretrak_property_v2_property_pb.Property.AsObject>;
    checksList: Array<scoretrak_check_v2_check_pb.Check.AsObject>;
  };
}

export class ServiceServiceGetAllRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceServiceGetAllRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceServiceGetAllRequest): ServiceServiceGetAllRequest.AsObject;
  static serializeBinaryToWriter(message: ServiceServiceGetAllRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceServiceGetAllRequest;
  static deserializeBinaryFromReader(message: ServiceServiceGetAllRequest, reader: jspb.BinaryReader): ServiceServiceGetAllRequest;
}

export namespace ServiceServiceGetAllRequest {
  export type AsObject = {
  };
}

export class ServiceServiceGetAllResponse extends jspb.Message {
  getServicesList(): Array<Service>;
  setServicesList(value: Array<Service>): ServiceServiceGetAllResponse;
  clearServicesList(): ServiceServiceGetAllResponse;
  addServices(value?: Service, index?: number): Service;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceServiceGetAllResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceServiceGetAllResponse): ServiceServiceGetAllResponse.AsObject;
  static serializeBinaryToWriter(message: ServiceServiceGetAllResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceServiceGetAllResponse;
  static deserializeBinaryFromReader(message: ServiceServiceGetAllResponse, reader: jspb.BinaryReader): ServiceServiceGetAllResponse;
}

export namespace ServiceServiceGetAllResponse {
  export type AsObject = {
    servicesList: Array<Service.AsObject>;
  };
}

export class ServiceServiceGetByIDRequest extends jspb.Message {
  getId(): scoretrak_proto_v1_uuid_pb.UUID | undefined;
  setId(value?: scoretrak_proto_v1_uuid_pb.UUID): ServiceServiceGetByIDRequest;
  hasId(): boolean;
  clearId(): ServiceServiceGetByIDRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceServiceGetByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceServiceGetByIDRequest): ServiceServiceGetByIDRequest.AsObject;
  static serializeBinaryToWriter(message: ServiceServiceGetByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceServiceGetByIDRequest;
  static deserializeBinaryFromReader(message: ServiceServiceGetByIDRequest, reader: jspb.BinaryReader): ServiceServiceGetByIDRequest;
}

export namespace ServiceServiceGetByIDRequest {
  export type AsObject = {
    id?: scoretrak_proto_v1_uuid_pb.UUID.AsObject;
  };
}

export class ServiceServiceGetByIDResponse extends jspb.Message {
  getService(): Service | undefined;
  setService(value?: Service): ServiceServiceGetByIDResponse;
  hasService(): boolean;
  clearService(): ServiceServiceGetByIDResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceServiceGetByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceServiceGetByIDResponse): ServiceServiceGetByIDResponse.AsObject;
  static serializeBinaryToWriter(message: ServiceServiceGetByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceServiceGetByIDResponse;
  static deserializeBinaryFromReader(message: ServiceServiceGetByIDResponse, reader: jspb.BinaryReader): ServiceServiceGetByIDResponse;
}

export namespace ServiceServiceGetByIDResponse {
  export type AsObject = {
    service?: Service.AsObject;
  };
}

export class ServiceServiceDeleteRequest extends jspb.Message {
  getId(): scoretrak_proto_v1_uuid_pb.UUID | undefined;
  setId(value?: scoretrak_proto_v1_uuid_pb.UUID): ServiceServiceDeleteRequest;
  hasId(): boolean;
  clearId(): ServiceServiceDeleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceServiceDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceServiceDeleteRequest): ServiceServiceDeleteRequest.AsObject;
  static serializeBinaryToWriter(message: ServiceServiceDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceServiceDeleteRequest;
  static deserializeBinaryFromReader(message: ServiceServiceDeleteRequest, reader: jspb.BinaryReader): ServiceServiceDeleteRequest;
}

export namespace ServiceServiceDeleteRequest {
  export type AsObject = {
    id?: scoretrak_proto_v1_uuid_pb.UUID.AsObject;
  };
}

export class ServiceServiceDeleteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceServiceDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceServiceDeleteResponse): ServiceServiceDeleteResponse.AsObject;
  static serializeBinaryToWriter(message: ServiceServiceDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceServiceDeleteResponse;
  static deserializeBinaryFromReader(message: ServiceServiceDeleteResponse, reader: jspb.BinaryReader): ServiceServiceDeleteResponse;
}

export namespace ServiceServiceDeleteResponse {
  export type AsObject = {
  };
}

export class ServiceServiceStoreRequest extends jspb.Message {
  getServicesList(): Array<Service>;
  setServicesList(value: Array<Service>): ServiceServiceStoreRequest;
  clearServicesList(): ServiceServiceStoreRequest;
  addServices(value?: Service, index?: number): Service;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceServiceStoreRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceServiceStoreRequest): ServiceServiceStoreRequest.AsObject;
  static serializeBinaryToWriter(message: ServiceServiceStoreRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceServiceStoreRequest;
  static deserializeBinaryFromReader(message: ServiceServiceStoreRequest, reader: jspb.BinaryReader): ServiceServiceStoreRequest;
}

export namespace ServiceServiceStoreRequest {
  export type AsObject = {
    servicesList: Array<Service.AsObject>;
  };
}

export class ServiceServiceStoreResponse extends jspb.Message {
  getIdsList(): Array<scoretrak_proto_v1_uuid_pb.UUID>;
  setIdsList(value: Array<scoretrak_proto_v1_uuid_pb.UUID>): ServiceServiceStoreResponse;
  clearIdsList(): ServiceServiceStoreResponse;
  addIds(value?: scoretrak_proto_v1_uuid_pb.UUID, index?: number): scoretrak_proto_v1_uuid_pb.UUID;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceServiceStoreResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceServiceStoreResponse): ServiceServiceStoreResponse.AsObject;
  static serializeBinaryToWriter(message: ServiceServiceStoreResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceServiceStoreResponse;
  static deserializeBinaryFromReader(message: ServiceServiceStoreResponse, reader: jspb.BinaryReader): ServiceServiceStoreResponse;
}

export namespace ServiceServiceStoreResponse {
  export type AsObject = {
    idsList: Array<scoretrak_proto_v1_uuid_pb.UUID.AsObject>;
  };
}

export class ServiceServiceUpdateRequest extends jspb.Message {
  getService(): Service | undefined;
  setService(value?: Service): ServiceServiceUpdateRequest;
  hasService(): boolean;
  clearService(): ServiceServiceUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceServiceUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceServiceUpdateRequest): ServiceServiceUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: ServiceServiceUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceServiceUpdateRequest;
  static deserializeBinaryFromReader(message: ServiceServiceUpdateRequest, reader: jspb.BinaryReader): ServiceServiceUpdateRequest;
}

export namespace ServiceServiceUpdateRequest {
  export type AsObject = {
    service?: Service.AsObject;
  };
}

export class ServiceServiceUpdateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceServiceUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceServiceUpdateResponse): ServiceServiceUpdateResponse.AsObject;
  static serializeBinaryToWriter(message: ServiceServiceUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceServiceUpdateResponse;
  static deserializeBinaryFromReader(message: ServiceServiceUpdateResponse, reader: jspb.BinaryReader): ServiceServiceUpdateResponse;
}

export namespace ServiceServiceUpdateResponse {
  export type AsObject = {
  };
}

export class ServiceServiceTestServiceRequest extends jspb.Message {
  getId(): scoretrak_proto_v1_uuid_pb.UUID | undefined;
  setId(value?: scoretrak_proto_v1_uuid_pb.UUID): ServiceServiceTestServiceRequest;
  hasId(): boolean;
  clearId(): ServiceServiceTestServiceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceServiceTestServiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceServiceTestServiceRequest): ServiceServiceTestServiceRequest.AsObject;
  static serializeBinaryToWriter(message: ServiceServiceTestServiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceServiceTestServiceRequest;
  static deserializeBinaryFromReader(message: ServiceServiceTestServiceRequest, reader: jspb.BinaryReader): ServiceServiceTestServiceRequest;
}

export namespace ServiceServiceTestServiceRequest {
  export type AsObject = {
    id?: scoretrak_proto_v1_uuid_pb.UUID.AsObject;
  };
}

export class ServiceServiceTestServiceResponse extends jspb.Message {
  getCheck(): scoretrak_check_v2_check_pb.Check | undefined;
  setCheck(value?: scoretrak_check_v2_check_pb.Check): ServiceServiceTestServiceResponse;
  hasCheck(): boolean;
  clearCheck(): ServiceServiceTestServiceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceServiceTestServiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceServiceTestServiceResponse): ServiceServiceTestServiceResponse.AsObject;
  static serializeBinaryToWriter(message: ServiceServiceTestServiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceServiceTestServiceResponse;
  static deserializeBinaryFromReader(message: ServiceServiceTestServiceResponse, reader: jspb.BinaryReader): ServiceServiceTestServiceResponse;
}

export namespace ServiceServiceTestServiceResponse {
  export type AsObject = {
    check?: scoretrak_check_v2_check_pb.Check.AsObject;
  };
}

