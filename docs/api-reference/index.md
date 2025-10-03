---
layout: page
title: API Reference
description: NHS SPI API reference documentation
---

# API Reference

Complete reference documentation for NHS Spine Integration Platform APIs.

## Base URL

```
https://api.nhs-spi.nhs.uk/v1
```

## Authentication

All API requests require authentication using OAuth 2.0 bearer tokens.

```http
Authorization: Bearer {access_token}
```

## Common Headers

```http
Accept: application/json
Content-Type: application/json
X-Correlation-ID: {unique-request-id}
```

## Patient Demographics API

### Get Patient Details

Retrieve patient demographic information.

**Endpoint:** `GET /patients/{nhsNumber}`

**Parameters:**
- `nhsNumber` (path, required): NHS Number of the patient

**Response:**
```json
{
  "nhsNumber": "9000000009",
  "familyName": "Smith",
  "givenName": "John",
  "dateOfBirth": "1970-01-01",
  "gender": "male",
  "address": {
    "line1": "123 High Street",
    "city": "London",
    "postalCode": "SW1A 1AA"
  }
}
```

### Search Patients

Search for patients by demographics.

**Endpoint:** `GET /patients/search`

**Query Parameters:**
- `familyName` (optional): Patient family name
- `givenName` (optional): Patient given name
- `dateOfBirth` (optional): Date of birth (YYYY-MM-DD)
- `postalCode` (optional): Postal code

**Response:**
```json
{
  "patients": [
    {
      "nhsNumber": "9000000009",
      "familyName": "Smith",
      "givenName": "John",
      "dateOfBirth": "1970-01-01"
    }
  ],
  "total": 1
}
```

## Error Handling

The API uses standard HTTP status codes:

- `200 OK`: Request successful
- `400 Bad Request`: Invalid request parameters
- `401 Unauthorized`: Missing or invalid authentication
- `403 Forbidden`: Insufficient permissions
- `404 Not Found`: Resource not found
- `429 Too Many Requests`: Rate limit exceeded
- `500 Internal Server Error`: Server error

Error responses include details:

```json
{
  "error": {
    "code": "INVALID_REQUEST",
    "message": "Invalid NHS Number format",
    "details": "NHS Number must be 10 digits"
  }
}
```

## Rate Limiting

API requests are rate limited:

- Standard tier: 100 requests per minute
- Premium tier: 1000 requests per minute

Rate limit headers:
```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1640000000
```
