export enum ValidationStatus{
    Incomplete = "Incomplete",
    PendingValidation = "PendingValidation",
    Validated = "Validated",
    ValidationFailed = "ValidationFailed",
    ValidationRevoked = "ValidationRevoked"
}

export enum DomainActions{
    ConsultationRemoved = "ConsRemoved",
    ConsultationCreated = "ConsCreated",
    ConsultationUpdated = "ConsUpdated",
    ImageAdded = "ImageAdded",
    ExaminationNotesUpdated = "ExamNotesUpdated",
    ExaminationRemoved = "ExamRemoved"
}

export enum NotificationStatus{
    New = "New",
    Acknowledged = "Ack"
}

export enum UserRoles{
    FieldHCP = "FieldHCP",
    SpecialistHCP = "SpecialistHCP",
    MedicalDirector = "MedicalDirector"
}

export enum MedicalGenders{
    Male = "Male",
    Female = "Female"
}

export enum RetinopathyGrades{
    NoApparentDR = "NoApparentDR",
    MildNPDR = "MildNPDR",
    ModerateNPDR = "ModerateNPDR",
    SevereNPDR = "SevereNPDR",
    PDR = "PDR"
}