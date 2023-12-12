import { Agent, setGlobalDispatcher } from "undici";

const dotnetAgent = new Agent({
  connect: {
    rejectUnauthorized: false,
  },
});

setGlobalDispatcher(dotnetAgent);

export function dotnetFetch(url: string, opts: any) {
  opts ||= {};
  opts.dispatcher = dotnetAgent;
  return fetch(url, opts);
}
