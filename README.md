# node-multi-tenant-application
Multi-tenant application example
* Inspired by https://blog.lftechnology.com/designing-a-secure-and-scalable-multi-tenant-application-on-node-js-15ae13dda778

## Config

Change the ``db_host`` at ``init.sql`` to your local ip address

## Running the project

```
docker-compose up
```

## Ping

```
http://localhost:3002/
```

## Request to tenant 1

```
http://localhost:3002/users?slug=tenant1
```

## Request to  tenant 2

```
http://localhost:3002/users?slug=tenant2
```
