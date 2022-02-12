# Deno Full Stack Application

This is a boilerplate full stack application repo that has both backend and frontend in Deno.

- Backend: Oak
- Frontend: Aleph
- Executor: Velociraptor

## How to get started

This is a WIP repository,

Clone the repository and cd to the directory,

then you will need to install velociraptor manually using the command:

```
deno install -qAn vr https://deno.land/x/velociraptor@1.2.0/cli.ts
```

and then we need to install the **Aleph** and upgrade **Deno** packages manually. Which the repository will handle by executing the command

```
vr install
```

## Then Executing: dev mode

```
vr start
```

## For Windows systems:

Due to some ongoing issues with vr `&&` doesn't work as intended in Windows. So just replace `&&` with `;` and it should work as expected.