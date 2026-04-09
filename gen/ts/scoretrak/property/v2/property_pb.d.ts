import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb'; // proto import: "google/protobuf/wrappers.proto"
import * as scoretrak_proto_v1_uuid_pb from '../../../scoretrak/proto/v1/uuid_pb'; // proto import: "scoretrak/proto/v1/uuid.proto"


export class Property extends jspb.Message {
  getServiceId(): scoretrak_proto_v1_uuid_pb.UUID | undefined;
  setServiceId(value?: scoretrak_proto_v1_uuid_pb.UUID): Property;
  hasServiceId(): boolean;
  clearServiceId(): Property;

  getKey(): string;
  setKey(value: string): Property;

  getValue(): google_protobuf_wrappers_pb.StringValue | undefined;
  setValue(value?: google_protobuf_wrappers_pb.StringValue): Property;
  hasValue(): boolean;
  clearValue(): Property;

  getStatus(): Status;
  setStatus(value: Status): Property;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Property.AsObject;
  static toObject(includeInstance: boolean, msg: Property): Property.AsObject;
  static serializeBinaryToWriter(message: Property, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Property;
  static deserializeBinaryFromReader(message: Property, reader: jspb.BinaryReader): Property;
}

export namespace Property {
  export type AsObject = {
    serviceId?: scoretrak_proto_v1_uuid_pb.UUID.AsObject;
    key: string;
    value?: google_protobuf_wrappers_pb.StringValue.AsObject;
    status: Status;
  };
}

export class PropertyServiceGetAllRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertyServiceGetAllRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PropertyServiceGetAllRequest): PropertyServiceGetAllRequest.AsObject;
  static serializeBinaryToWriter(message: PropertyServiceGetAllRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertyServiceGetAllRequest;
  static deserializeBinaryFromReader(message: PropertyServiceGetAllRequest, reader: jspb.BinaryReader): PropertyServiceGetAllRequest;
}

export namespace PropertyServiceGetAllRequest {
  export type AsObject = {
  };
}

export class PropertyServiceGetAllResponse extends jspb.Message {
  getPropertiesList(): Array<Property>;
  setPropertiesList(value: Array<Property>): PropertyServiceGetAllResponse;
  clearPropertiesList(): PropertyServiceGetAllResponse;
  addProperties(value?: Property, index?: number): Property;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertyServiceGetAllResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PropertyServiceGetAllResponse): PropertyServiceGetAllResponse.AsObject;
  static serializeBinaryToWriter(message: PropertyServiceGetAllResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertyServiceGetAllResponse;
  static deserializeBinaryFromReader(message: PropertyServiceGetAllResponse, reader: jspb.BinaryReader): PropertyServiceGetAllResponse;
}

export namespace PropertyServiceGetAllResponse {
  export type AsObject = {
    propertiesList: Array<Property.AsObject>;
  };
}

export class PropertyServiceGetByServiceIDKeyRequest extends jspb.Message {
  getServiceId(): scoretrak_proto_v1_uuid_pb.UUID | undefined;
  setServiceId(value?: scoretrak_proto_v1_uuid_pb.UUID): PropertyServiceGetByServiceIDKeyRequest;
  hasServiceId(): boolean;
  clearServiceId(): PropertyServiceGetByServiceIDKeyRequest;

  getKey(): string;
  setKey(value: string): PropertyServiceGetByServiceIDKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertyServiceGetByServiceIDKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PropertyServiceGetByServiceIDKeyRequest): PropertyServiceGetByServiceIDKeyRequest.AsObject;
  static serializeBinaryToWriter(message: PropertyServiceGetByServiceIDKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertyServiceGetByServiceIDKeyRequest;
  static deserializeBinaryFromReader(message: PropertyServiceGetByServiceIDKeyRequest, reader: jspb.BinaryReader): PropertyServiceGetByServiceIDKeyRequest;
}

export namespace PropertyServiceGetByServiceIDKeyRequest {
  export type AsObject = {
    serviceId?: scoretrak_proto_v1_uuid_pb.UUID.AsObject;
    key: string;
  };
}

export class PropertyServiceGetByServiceIDKeyResponse extends jspb.Message {
  getProperty(): Property | undefined;
  setProperty(value?: Property): PropertyServiceGetByServiceIDKeyResponse;
  hasProperty(): boolean;
  clearProperty(): PropertyServiceGetByServiceIDKeyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertyServiceGetByServiceIDKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PropertyServiceGetByServiceIDKeyResponse): PropertyServiceGetByServiceIDKeyResponse.AsObject;
  static serializeBinaryToWriter(message: PropertyServiceGetByServiceIDKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertyServiceGetByServiceIDKeyResponse;
  static deserializeBinaryFromReader(message: PropertyServiceGetByServiceIDKeyResponse, reader: jspb.BinaryReader): PropertyServiceGetByServiceIDKeyResponse;
}

export namespace PropertyServiceGetByServiceIDKeyResponse {
  export type AsObject = {
    property?: Property.AsObject;
  };
}

export class PropertyServiceGetAllByServiceIDRequest extends jspb.Message {
  getServiceId(): scoretrak_proto_v1_uuid_pb.UUID | undefined;
  setServiceId(value?: scoretrak_proto_v1_uuid_pb.UUID): PropertyServiceGetAllByServiceIDRequest;
  hasServiceId(): boolean;
  clearServiceId(): PropertyServiceGetAllByServiceIDRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertyServiceGetAllByServiceIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PropertyServiceGetAllByServiceIDRequest): PropertyServiceGetAllByServiceIDRequest.AsObject;
  static serializeBinaryToWriter(message: PropertyServiceGetAllByServiceIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertyServiceGetAllByServiceIDRequest;
  static deserializeBinaryFromReader(message: PropertyServiceGetAllByServiceIDRequest, reader: jspb.BinaryReader): PropertyServiceGetAllByServiceIDRequest;
}

export namespace PropertyServiceGetAllByServiceIDRequest {
  export type AsObject = {
    serviceId?: scoretrak_proto_v1_uuid_pb.UUID.AsObject;
  };
}

export class PropertyServiceGetAllByServiceIDResponse extends jspb.Message {
  getPropertiesList(): Array<Property>;
  setPropertiesList(value: Array<Property>): PropertyServiceGetAllByServiceIDResponse;
  clearPropertiesList(): PropertyServiceGetAllByServiceIDResponse;
  addProperties(value?: Property, index?: number): Property;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertyServiceGetAllByServiceIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PropertyServiceGetAllByServiceIDResponse): PropertyServiceGetAllByServiceIDResponse.AsObject;
  static serializeBinaryToWriter(message: PropertyServiceGetAllByServiceIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertyServiceGetAllByServiceIDResponse;
  static deserializeBinaryFromReader(message: PropertyServiceGetAllByServiceIDResponse, reader: jspb.BinaryReader): PropertyServiceGetAllByServiceIDResponse;
}

export namespace PropertyServiceGetAllByServiceIDResponse {
  export type AsObject = {
    propertiesList: Array<Property.AsObject>;
  };
}

export class PropertyServiceDeleteRequest extends jspb.Message {
  getServiceId(): scoretrak_proto_v1_uuid_pb.UUID | undefined;
  setServiceId(value?: scoretrak_proto_v1_uuid_pb.UUID): PropertyServiceDeleteRequest;
  hasServiceId(): boolean;
  clearServiceId(): PropertyServiceDeleteRequest;

  getKey(): string;
  setKey(value: string): PropertyServiceDeleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertyServiceDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PropertyServiceDeleteRequest): PropertyServiceDeleteRequest.AsObject;
  static serializeBinaryToWriter(message: PropertyServiceDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertyServiceDeleteRequest;
  static deserializeBinaryFromReader(message: PropertyServiceDeleteRequest, reader: jspb.BinaryReader): PropertyServiceDeleteRequest;
}

export namespace PropertyServiceDeleteRequest {
  export type AsObject = {
    serviceId?: scoretrak_proto_v1_uuid_pb.UUID.AsObject;
    key: string;
  };
}

export class PropertyServiceDeleteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertyServiceDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PropertyServiceDeleteResponse): PropertyServiceDeleteResponse.AsObject;
  static serializeBinaryToWriter(message: PropertyServiceDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertyServiceDeleteResponse;
  static deserializeBinaryFromReader(message: PropertyServiceDeleteResponse, reader: jspb.BinaryReader): PropertyServiceDeleteResponse;
}

export namespace PropertyServiceDeleteResponse {
  export type AsObject = {
  };
}

export class PropertyServiceStoreRequest extends jspb.Message {
  getPropertiesList(): Array<Property>;
  setPropertiesList(value: Array<Property>): PropertyServiceStoreRequest;
  clearPropertiesList(): PropertyServiceStoreRequest;
  addProperties(value?: Property, index?: number): Property;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertyServiceStoreRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PropertyServiceStoreRequest): PropertyServiceStoreRequest.AsObject;
  static serializeBinaryToWriter(message: PropertyServiceStoreRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertyServiceStoreRequest;
  static deserializeBinaryFromReader(message: PropertyServiceStoreRequest, reader: jspb.BinaryReader): PropertyServiceStoreRequest;
}

export namespace PropertyServiceStoreRequest {
  export type AsObject = {
    propertiesList: Array<Property.AsObject>;
  };
}

export class PropertyServiceStoreResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertyServiceStoreResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PropertyServiceStoreResponse): PropertyServiceStoreResponse.AsObject;
  static serializeBinaryToWriter(message: PropertyServiceStoreResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertyServiceStoreResponse;
  static deserializeBinaryFromReader(message: PropertyServiceStoreResponse, reader: jspb.BinaryReader): PropertyServiceStoreResponse;
}

export namespace PropertyServiceStoreResponse {
  export type AsObject = {
  };
}

export class PropertyServiceUpdateRequest extends jspb.Message {
  getProperty(): Property | undefined;
  setProperty(value?: Property): PropertyServiceUpdateRequest;
  hasProperty(): boolean;
  clearProperty(): PropertyServiceUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertyServiceUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PropertyServiceUpdateRequest): PropertyServiceUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: PropertyServiceUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertyServiceUpdateRequest;
  static deserializeBinaryFromReader(message: PropertyServiceUpdateRequest, reader: jspb.BinaryReader): PropertyServiceUpdateRequest;
}

export namespace PropertyServiceUpdateRequest {
  export type AsObject = {
    property?: Property.AsObject;
  };
}

export class PropertyServiceUpdateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertyServiceUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PropertyServiceUpdateResponse): PropertyServiceUpdateResponse.AsObject;
  static serializeBinaryToWriter(message: PropertyServiceUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertyServiceUpdateResponse;
  static deserializeBinaryFromReader(message: PropertyServiceUpdateResponse, reader: jspb.BinaryReader): PropertyServiceUpdateResponse;
}

export namespace PropertyServiceUpdateResponse {
  export type AsObject = {
  };
}

export enum Status {
  STATUS_UNSPECIFIED = 0,
  STATUS_VIEW = 1,
  STATUS_EDIT = 2,
  STATUS_HIDE = 3,
}
