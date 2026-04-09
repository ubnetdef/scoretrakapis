import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb'; // proto import: "google/protobuf/wrappers.proto"


export class Policy extends jspb.Message {
  getAllowUnauthenticatedUsers(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setAllowUnauthenticatedUsers(value?: google_protobuf_wrappers_pb.BoolValue): Policy;
  hasAllowUnauthenticatedUsers(): boolean;
  clearAllowUnauthenticatedUsers(): Policy;

  getAllowChangingUsernamesAndPasswords(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setAllowChangingUsernamesAndPasswords(value?: google_protobuf_wrappers_pb.BoolValue): Policy;
  hasAllowChangingUsernamesAndPasswords(): boolean;
  clearAllowChangingUsernamesAndPasswords(): Policy;

  getShowPoints(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setShowPoints(value?: google_protobuf_wrappers_pb.BoolValue): Policy;
  hasShowPoints(): boolean;
  clearShowPoints(): Policy;

  getShowAddresses(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setShowAddresses(value?: google_protobuf_wrappers_pb.BoolValue): Policy;
  hasShowAddresses(): boolean;
  clearShowAddresses(): Policy;

  getAllowRedTeamLaunchingServiceTestsManually(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setAllowRedTeamLaunchingServiceTestsManually(value?: google_protobuf_wrappers_pb.BoolValue): Policy;
  hasAllowRedTeamLaunchingServiceTestsManually(): boolean;
  clearAllowRedTeamLaunchingServiceTestsManually(): Policy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Policy.AsObject;
  static toObject(includeInstance: boolean, msg: Policy): Policy.AsObject;
  static serializeBinaryToWriter(message: Policy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Policy;
  static deserializeBinaryFromReader(message: Policy, reader: jspb.BinaryReader): Policy;
}

export namespace Policy {
  export type AsObject = {
    allowUnauthenticatedUsers?: google_protobuf_wrappers_pb.BoolValue.AsObject;
    allowChangingUsernamesAndPasswords?: google_protobuf_wrappers_pb.BoolValue.AsObject;
    showPoints?: google_protobuf_wrappers_pb.BoolValue.AsObject;
    showAddresses?: google_protobuf_wrappers_pb.BoolValue.AsObject;
    allowRedTeamLaunchingServiceTestsManually?: google_protobuf_wrappers_pb.BoolValue.AsObject;
  };
}

export class PolicyServiceGetRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyServiceGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyServiceGetRequest): PolicyServiceGetRequest.AsObject;
  static serializeBinaryToWriter(message: PolicyServiceGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyServiceGetRequest;
  static deserializeBinaryFromReader(message: PolicyServiceGetRequest, reader: jspb.BinaryReader): PolicyServiceGetRequest;
}

export namespace PolicyServiceGetRequest {
  export type AsObject = {
  };
}

export class PolicyServiceGetResponse extends jspb.Message {
  getPolicy(): Policy | undefined;
  setPolicy(value?: Policy): PolicyServiceGetResponse;
  hasPolicy(): boolean;
  clearPolicy(): PolicyServiceGetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyServiceGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyServiceGetResponse): PolicyServiceGetResponse.AsObject;
  static serializeBinaryToWriter(message: PolicyServiceGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyServiceGetResponse;
  static deserializeBinaryFromReader(message: PolicyServiceGetResponse, reader: jspb.BinaryReader): PolicyServiceGetResponse;
}

export namespace PolicyServiceGetResponse {
  export type AsObject = {
    policy?: Policy.AsObject;
  };
}

export class PolicyServiceGetUnaryRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyServiceGetUnaryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyServiceGetUnaryRequest): PolicyServiceGetUnaryRequest.AsObject;
  static serializeBinaryToWriter(message: PolicyServiceGetUnaryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyServiceGetUnaryRequest;
  static deserializeBinaryFromReader(message: PolicyServiceGetUnaryRequest, reader: jspb.BinaryReader): PolicyServiceGetUnaryRequest;
}

export namespace PolicyServiceGetUnaryRequest {
  export type AsObject = {
  };
}

export class PolicyServiceGetUnaryResponse extends jspb.Message {
  getPolicy(): Policy | undefined;
  setPolicy(value?: Policy): PolicyServiceGetUnaryResponse;
  hasPolicy(): boolean;
  clearPolicy(): PolicyServiceGetUnaryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyServiceGetUnaryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyServiceGetUnaryResponse): PolicyServiceGetUnaryResponse.AsObject;
  static serializeBinaryToWriter(message: PolicyServiceGetUnaryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyServiceGetUnaryResponse;
  static deserializeBinaryFromReader(message: PolicyServiceGetUnaryResponse, reader: jspb.BinaryReader): PolicyServiceGetUnaryResponse;
}

export namespace PolicyServiceGetUnaryResponse {
  export type AsObject = {
    policy?: Policy.AsObject;
  };
}

export class PolicyServiceUpdateRequest extends jspb.Message {
  getPolicy(): Policy | undefined;
  setPolicy(value?: Policy): PolicyServiceUpdateRequest;
  hasPolicy(): boolean;
  clearPolicy(): PolicyServiceUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyServiceUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyServiceUpdateRequest): PolicyServiceUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: PolicyServiceUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyServiceUpdateRequest;
  static deserializeBinaryFromReader(message: PolicyServiceUpdateRequest, reader: jspb.BinaryReader): PolicyServiceUpdateRequest;
}

export namespace PolicyServiceUpdateRequest {
  export type AsObject = {
    policy?: Policy.AsObject;
  };
}

export class PolicyServiceUpdateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyServiceUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyServiceUpdateResponse): PolicyServiceUpdateResponse.AsObject;
  static serializeBinaryToWriter(message: PolicyServiceUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyServiceUpdateResponse;
  static deserializeBinaryFromReader(message: PolicyServiceUpdateResponse, reader: jspb.BinaryReader): PolicyServiceUpdateResponse;
}

export namespace PolicyServiceUpdateResponse {
  export type AsObject = {
  };
}

