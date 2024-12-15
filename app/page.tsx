"use client"

import {api} from "@/convex/_generated/api"
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Authenticated, Unauthenticated, useMutation, useQuery } from "convex/react";

export default function Home() {

  const documents= useQuery(api.documents.getDocuments)
  const createDocument= useMutation(api.documents.createDocument)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
      </Authenticated>
      <button onClick={()=>{createDocument({title:"Hello world"})}}>Click me</button>
      {documents?.map((doc)=>(
        <div key={doc._id}>{doc.title}</div>
      ))}
    </main>
  );
}
