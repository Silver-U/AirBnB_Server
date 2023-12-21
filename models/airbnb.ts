export interface listRiview {
  _id: string
  listing_url: string
  name: string
  summary: string
  interaction: string
  house_rules: string
  property_type: string
  room_type: string
  bed_type: string
  minimum_nights: string
  maximum_nights: string
  cancellation_policy: string
  last_scraped: LastScraped
  calendar_last_scraped: CalendarLastScraped
  first_review: FirstReview
  last_review: LastReview
  accommodates: Accommodates
  bedrooms: Bedrooms
  beds: Beds
  number_of_reviews: NumberOfReviews
  bathrooms: Bathrooms
  amenities: string[]
  price: Price
  security_deposit: SecurityDeposit
  cleaning_fee: CleaningFee
  extra_people: ExtraPeople
  guests_included: GuestsIncluded
  images: Images
  host: Host
  address: Address
  availability: Availability
  review_scores: ReviewScores
  reviews: Review[]
}

export interface LastScraped {
  $date: Date
}

export interface Date {
  $numberLong: number
}

export interface CalendarLastScraped {
  $date: Date
}


export interface FirstReview {
  $date: Date
}

export interface LastReview {
  $date: Date
}

export interface Accommodates {
  $numberInt: string
}

export interface Bedrooms {
  $numberInt: string
}

export interface Beds {
  $numberInt: string
}

export interface NumberOfReviews {
  $numberInt: string
}

export interface Bathrooms {
  $numberDecimal: string
}

export interface Price {
  $numberDecimal: string
}

export interface SecurityDeposit {
  $numberDecimal: string
}

export interface CleaningFee {
  $numberDecimal: string
}

export interface ExtraPeople {
  $numberDecimal: string
}

export interface GuestsIncluded {
  $numberDecimal: string
}

export interface Images {
  thumbnail_url: string
  medium_url: string
  picture_url: string
  xl_picture_url: string
}

export interface Host {
  host_id: string
  host_url: string
  host_name: string
  host_location: string
  host_about: string
  host_response_time: string
  host_thumbnail_url: string
  host_picture_url: string
  host_neighbourhood: string
  host_response_rate: HostResponseRate
  host_is_superhost: boolean
  host_has_profile_pic: boolean
  host_identity_verified: boolean
  host_listings_count: HostListingsCount
  host_total_listings_count: HostTotalListingsCount
  host_verifications: string[]
}

export interface HostResponseRate {
  $numberInt: string
}

export interface HostListingsCount {
  $numberInt: string
}

export interface HostTotalListingsCount {
  $numberInt: string
}

export interface Address {
  street: string
  suburb: string
  government_area: string
  market: string
  country: string
  country_code: string
  location: Location
}

export interface Location {
  type: string
  coordinates: Coordinate[]
  is_location_exact: boolean
}

export interface Coordinate {
  $numberDouble: string
}

export interface Availability {
  availability_30: Availability30
  availability_60: Availability60
  availability_90: Availability90
  availability_365: Availability365
}

export interface Availability30 {
  $numberInt: string
}

export interface Availability60 {
  $numberInt: string
}

export interface Availability90 {
  $numberInt: string
}

export interface Availability365 {
  $numberInt: string
}

export interface ReviewScores {
  review_scores_accuracy: ReviewScoresAccuracy
  review_scores_cleanliness: ReviewScoresCleanliness
  review_scores_checkin: ReviewScoresCheckin
  review_scores_communication: ReviewScoresCommunication
  review_scores_location: ReviewScoresLocation
  review_scores_value: ReviewScoresValue
  review_scores_rating: ReviewScoresRating
}

export interface ReviewScoresAccuracy {
  $numberInt: string
}

export interface ReviewScoresCleanliness {
  $numberInt: string
}

export interface ReviewScoresCheckin {
  $numberInt: string
}

export interface ReviewScoresCommunication {
  $numberInt: string
}

export interface ReviewScoresLocation {
  $numberInt: string
}

export interface ReviewScoresValue {
  $numberInt: string
}

export interface ReviewScoresRating {
  $numberInt: string
}

export interface Review {
  _id: string
  date: Date
  listing_id: string
  reviewer_id: string
  reviewer_name: string
  comments: string
}
