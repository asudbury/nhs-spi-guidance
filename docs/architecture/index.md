---
layout: page
title: Architecture
description: NHS SPI architecture overview
---

# Architecture Overview

The NHS Spine Integration Platform (SPI) provides a modern API-based architecture for integrating with NHS Spine services.

## System Architecture

The SPI architecture consists of several key components:

### API Gateway

The API Gateway handles:
- Request routing
- Authentication and authorization
- Rate limiting
- Request/response transformation

### Integration Layer

The Integration Layer provides:
- Connection to NHS Spine services
- Protocol translation
- Data mapping and transformation
- Error handling and retry logic

### Data Services

Data Services offer:
- Patient demographics
- Clinical records access
- Prescription services
- Appointment management

## Security Model

SPI implements a comprehensive security model including:

- OAuth 2.0 authentication
- TLS encryption for data in transit
- Role-based access control (RBAC)
- Audit logging

## Integration Patterns

Common integration patterns supported by SPI:

1. **Request/Response**: Synchronous API calls for immediate data retrieval
2. **Event-Driven**: Asynchronous notifications for real-time updates
3. **Batch Processing**: Scheduled data synchronization for bulk operations

## High Availability

The platform is designed for high availability with:

- Multi-region deployment
- Automatic failover
- Load balancing
- 99.9% uptime SLA
