import * as jspb from 'google-protobuf'

import * as scoretrak_check_v2_check_pb from '../../../scoretrak/check/v2/check_pb'; // proto import: "scoretrak/check/v2/check.proto"
import * as scoretrak_config_v2_config_pb from '../../../scoretrak/config/v2/config_pb'; // proto import: "scoretrak/config/v2/config.proto"
import * as scoretrak_host_v2_host_pb from '../../../scoretrak/host/v2/host_pb'; // proto import: "scoretrak/host/v2/host.proto"
import * as scoretrak_host_group_v2_host_group_pb from '../../../scoretrak/host_group/v2/host_group_pb'; // proto import: "scoretrak/host_group/v2/host_group.proto"
import * as scoretrak_policy_v2_policy_pb from '../../../scoretrak/policy/v2/policy_pb'; // proto import: "scoretrak/policy/v2/policy.proto"
import * as scoretrak_property_v2_property_pb from '../../../scoretrak/property/v2/property_pb'; // proto import: "scoretrak/property/v2/property.proto"
import * as scoretrak_report_v2_report_pb from '../../../scoretrak/report/v2/report_pb'; // proto import: "scoretrak/report/v2/report.proto"
import * as scoretrak_round_v2_round_pb from '../../../scoretrak/round/v2/round_pb'; // proto import: "scoretrak/round/v2/round.proto"
import * as scoretrak_service_v2_service_pb from '../../../scoretrak/service/v2/service_pb'; // proto import: "scoretrak/service/v2/service.proto"
import * as scoretrak_service_group_v2_service_group_pb from '../../../scoretrak/service_group/v2/service_group_pb'; // proto import: "scoretrak/service_group/v2/service_group.proto"
import * as scoretrak_team_v2_team_pb from '../../../scoretrak/team/v2/team_pb'; // proto import: "scoretrak/team/v2/team.proto"
import * as scoretrak_user_v2_user_pb from '../../../scoretrak/user/v2/user_pb'; // proto import: "scoretrak/user/v2/user.proto"


export class Competition extends jspb.Message {
  getDynamicConfig(): scoretrak_config_v2_config_pb.DynamicConfig | undefined;
  setDynamicConfig(value?: scoretrak_config_v2_config_pb.DynamicConfig): Competition;
  hasDynamicConfig(): boolean;
  clearDynamicConfig(): Competition;

  getReport(): scoretrak_report_v2_report_pb.Report | undefined;
  setReport(value?: scoretrak_report_v2_report_pb.Report): Competition;
  hasReport(): boolean;
  clearReport(): Competition;

  getHostGroupsList(): Array<scoretrak_host_group_v2_host_group_pb.HostGroup>;
  setHostGroupsList(value: Array<scoretrak_host_group_v2_host_group_pb.HostGroup>): Competition;
  clearHostGroupsList(): Competition;
  addHostGroups(value?: scoretrak_host_group_v2_host_group_pb.HostGroup, index?: number): scoretrak_host_group_v2_host_group_pb.HostGroup;

  getHostsList(): Array<scoretrak_host_v2_host_pb.Host>;
  setHostsList(value: Array<scoretrak_host_v2_host_pb.Host>): Competition;
  clearHostsList(): Competition;
  addHosts(value?: scoretrak_host_v2_host_pb.Host, index?: number): scoretrak_host_v2_host_pb.Host;

  getTeamsList(): Array<scoretrak_team_v2_team_pb.Team>;
  setTeamsList(value: Array<scoretrak_team_v2_team_pb.Team>): Competition;
  clearTeamsList(): Competition;
  addTeams(value?: scoretrak_team_v2_team_pb.Team, index?: number): scoretrak_team_v2_team_pb.Team;

  getServicesList(): Array<scoretrak_service_v2_service_pb.Service>;
  setServicesList(value: Array<scoretrak_service_v2_service_pb.Service>): Competition;
  clearServicesList(): Competition;
  addServices(value?: scoretrak_service_v2_service_pb.Service, index?: number): scoretrak_service_v2_service_pb.Service;

  getServiceGroupsList(): Array<scoretrak_service_group_v2_service_group_pb.ServiceGroup>;
  setServiceGroupsList(value: Array<scoretrak_service_group_v2_service_group_pb.ServiceGroup>): Competition;
  clearServiceGroupsList(): Competition;
  addServiceGroups(value?: scoretrak_service_group_v2_service_group_pb.ServiceGroup, index?: number): scoretrak_service_group_v2_service_group_pb.ServiceGroup;

  getRoundsList(): Array<scoretrak_round_v2_round_pb.Round>;
  setRoundsList(value: Array<scoretrak_round_v2_round_pb.Round>): Competition;
  clearRoundsList(): Competition;
  addRounds(value?: scoretrak_round_v2_round_pb.Round, index?: number): scoretrak_round_v2_round_pb.Round;

  getPropertiesList(): Array<scoretrak_property_v2_property_pb.Property>;
  setPropertiesList(value: Array<scoretrak_property_v2_property_pb.Property>): Competition;
  clearPropertiesList(): Competition;
  addProperties(value?: scoretrak_property_v2_property_pb.Property, index?: number): scoretrak_property_v2_property_pb.Property;

  getChecksList(): Array<scoretrak_check_v2_check_pb.Check>;
  setChecksList(value: Array<scoretrak_check_v2_check_pb.Check>): Competition;
  clearChecksList(): Competition;
  addChecks(value?: scoretrak_check_v2_check_pb.Check, index?: number): scoretrak_check_v2_check_pb.Check;

  getUsersList(): Array<scoretrak_user_v2_user_pb.User>;
  setUsersList(value: Array<scoretrak_user_v2_user_pb.User>): Competition;
  clearUsersList(): Competition;
  addUsers(value?: scoretrak_user_v2_user_pb.User, index?: number): scoretrak_user_v2_user_pb.User;

  getPolicy(): scoretrak_policy_v2_policy_pb.Policy | undefined;
  setPolicy(value?: scoretrak_policy_v2_policy_pb.Policy): Competition;
  hasPolicy(): boolean;
  clearPolicy(): Competition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Competition.AsObject;
  static toObject(includeInstance: boolean, msg: Competition): Competition.AsObject;
  static serializeBinaryToWriter(message: Competition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Competition;
  static deserializeBinaryFromReader(message: Competition, reader: jspb.BinaryReader): Competition;
}

export namespace Competition {
  export type AsObject = {
    dynamicConfig?: scoretrak_config_v2_config_pb.DynamicConfig.AsObject;
    report?: scoretrak_report_v2_report_pb.Report.AsObject;
    hostGroupsList: Array<scoretrak_host_group_v2_host_group_pb.HostGroup.AsObject>;
    hostsList: Array<scoretrak_host_v2_host_pb.Host.AsObject>;
    teamsList: Array<scoretrak_team_v2_team_pb.Team.AsObject>;
    servicesList: Array<scoretrak_service_v2_service_pb.Service.AsObject>;
    serviceGroupsList: Array<scoretrak_service_group_v2_service_group_pb.ServiceGroup.AsObject>;
    roundsList: Array<scoretrak_round_v2_round_pb.Round.AsObject>;
    propertiesList: Array<scoretrak_property_v2_property_pb.Property.AsObject>;
    checksList: Array<scoretrak_check_v2_check_pb.Check.AsObject>;
    usersList: Array<scoretrak_user_v2_user_pb.User.AsObject>;
    policy?: scoretrak_policy_v2_policy_pb.Policy.AsObject;
  };
}

export class CompetitionServiceLoadCompetitionRequest extends jspb.Message {
  getCompetition(): Competition | undefined;
  setCompetition(value?: Competition): CompetitionServiceLoadCompetitionRequest;
  hasCompetition(): boolean;
  clearCompetition(): CompetitionServiceLoadCompetitionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompetitionServiceLoadCompetitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CompetitionServiceLoadCompetitionRequest): CompetitionServiceLoadCompetitionRequest.AsObject;
  static serializeBinaryToWriter(message: CompetitionServiceLoadCompetitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompetitionServiceLoadCompetitionRequest;
  static deserializeBinaryFromReader(message: CompetitionServiceLoadCompetitionRequest, reader: jspb.BinaryReader): CompetitionServiceLoadCompetitionRequest;
}

export namespace CompetitionServiceLoadCompetitionRequest {
  export type AsObject = {
    competition?: Competition.AsObject;
  };
}

export class CompetitionServiceLoadCompetitionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompetitionServiceLoadCompetitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CompetitionServiceLoadCompetitionResponse): CompetitionServiceLoadCompetitionResponse.AsObject;
  static serializeBinaryToWriter(message: CompetitionServiceLoadCompetitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompetitionServiceLoadCompetitionResponse;
  static deserializeBinaryFromReader(message: CompetitionServiceLoadCompetitionResponse, reader: jspb.BinaryReader): CompetitionServiceLoadCompetitionResponse;
}

export namespace CompetitionServiceLoadCompetitionResponse {
  export type AsObject = {
  };
}

export class CompetitionServiceFetchCoreCompetitionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompetitionServiceFetchCoreCompetitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CompetitionServiceFetchCoreCompetitionRequest): CompetitionServiceFetchCoreCompetitionRequest.AsObject;
  static serializeBinaryToWriter(message: CompetitionServiceFetchCoreCompetitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompetitionServiceFetchCoreCompetitionRequest;
  static deserializeBinaryFromReader(message: CompetitionServiceFetchCoreCompetitionRequest, reader: jspb.BinaryReader): CompetitionServiceFetchCoreCompetitionRequest;
}

export namespace CompetitionServiceFetchCoreCompetitionRequest {
  export type AsObject = {
  };
}

export class CompetitionServiceFetchCoreCompetitionResponse extends jspb.Message {
  getCompetition(): Competition | undefined;
  setCompetition(value?: Competition): CompetitionServiceFetchCoreCompetitionResponse;
  hasCompetition(): boolean;
  clearCompetition(): CompetitionServiceFetchCoreCompetitionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompetitionServiceFetchCoreCompetitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CompetitionServiceFetchCoreCompetitionResponse): CompetitionServiceFetchCoreCompetitionResponse.AsObject;
  static serializeBinaryToWriter(message: CompetitionServiceFetchCoreCompetitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompetitionServiceFetchCoreCompetitionResponse;
  static deserializeBinaryFromReader(message: CompetitionServiceFetchCoreCompetitionResponse, reader: jspb.BinaryReader): CompetitionServiceFetchCoreCompetitionResponse;
}

export namespace CompetitionServiceFetchCoreCompetitionResponse {
  export type AsObject = {
    competition?: Competition.AsObject;
  };
}

export class CompetitionServiceFetchEntireCompetitionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompetitionServiceFetchEntireCompetitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CompetitionServiceFetchEntireCompetitionRequest): CompetitionServiceFetchEntireCompetitionRequest.AsObject;
  static serializeBinaryToWriter(message: CompetitionServiceFetchEntireCompetitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompetitionServiceFetchEntireCompetitionRequest;
  static deserializeBinaryFromReader(message: CompetitionServiceFetchEntireCompetitionRequest, reader: jspb.BinaryReader): CompetitionServiceFetchEntireCompetitionRequest;
}

export namespace CompetitionServiceFetchEntireCompetitionRequest {
  export type AsObject = {
  };
}

export class CompetitionServiceFetchEntireCompetitionResponse extends jspb.Message {
  getCompetition(): Competition | undefined;
  setCompetition(value?: Competition): CompetitionServiceFetchEntireCompetitionResponse;
  hasCompetition(): boolean;
  clearCompetition(): CompetitionServiceFetchEntireCompetitionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompetitionServiceFetchEntireCompetitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CompetitionServiceFetchEntireCompetitionResponse): CompetitionServiceFetchEntireCompetitionResponse.AsObject;
  static serializeBinaryToWriter(message: CompetitionServiceFetchEntireCompetitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompetitionServiceFetchEntireCompetitionResponse;
  static deserializeBinaryFromReader(message: CompetitionServiceFetchEntireCompetitionResponse, reader: jspb.BinaryReader): CompetitionServiceFetchEntireCompetitionResponse;
}

export namespace CompetitionServiceFetchEntireCompetitionResponse {
  export type AsObject = {
    competition?: Competition.AsObject;
  };
}

export class CompetitionServiceResetScoresRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompetitionServiceResetScoresRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CompetitionServiceResetScoresRequest): CompetitionServiceResetScoresRequest.AsObject;
  static serializeBinaryToWriter(message: CompetitionServiceResetScoresRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompetitionServiceResetScoresRequest;
  static deserializeBinaryFromReader(message: CompetitionServiceResetScoresRequest, reader: jspb.BinaryReader): CompetitionServiceResetScoresRequest;
}

export namespace CompetitionServiceResetScoresRequest {
  export type AsObject = {
  };
}

export class CompetitionServiceResetScoresResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompetitionServiceResetScoresResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CompetitionServiceResetScoresResponse): CompetitionServiceResetScoresResponse.AsObject;
  static serializeBinaryToWriter(message: CompetitionServiceResetScoresResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompetitionServiceResetScoresResponse;
  static deserializeBinaryFromReader(message: CompetitionServiceResetScoresResponse, reader: jspb.BinaryReader): CompetitionServiceResetScoresResponse;
}

export namespace CompetitionServiceResetScoresResponse {
  export type AsObject = {
  };
}

export class CompetitionServiceDeleteCompetitionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompetitionServiceDeleteCompetitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CompetitionServiceDeleteCompetitionRequest): CompetitionServiceDeleteCompetitionRequest.AsObject;
  static serializeBinaryToWriter(message: CompetitionServiceDeleteCompetitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompetitionServiceDeleteCompetitionRequest;
  static deserializeBinaryFromReader(message: CompetitionServiceDeleteCompetitionRequest, reader: jspb.BinaryReader): CompetitionServiceDeleteCompetitionRequest;
}

export namespace CompetitionServiceDeleteCompetitionRequest {
  export type AsObject = {
  };
}

export class CompetitionServiceDeleteCompetitionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompetitionServiceDeleteCompetitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CompetitionServiceDeleteCompetitionResponse): CompetitionServiceDeleteCompetitionResponse.AsObject;
  static serializeBinaryToWriter(message: CompetitionServiceDeleteCompetitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompetitionServiceDeleteCompetitionResponse;
  static deserializeBinaryFromReader(message: CompetitionServiceDeleteCompetitionResponse, reader: jspb.BinaryReader): CompetitionServiceDeleteCompetitionResponse;
}

export namespace CompetitionServiceDeleteCompetitionResponse {
  export type AsObject = {
  };
}

