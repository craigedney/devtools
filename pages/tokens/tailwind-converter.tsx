import type { NextPage } from "next";
import ApplicationShell from "../../components/layouts/application-shell";
import { ActionPanel } from "../../components/layouts/action-panel";

const TailwindConverter: NextPage = () => {
  return (
    <ApplicationShell>
      <ActionPanel
        formSection={{
          headline: "Update your email",
          subtext:
            "Change the email address you want associated with your account.",
        }}
      >
        <form className="mt-5 sm:flex sm:items-center">
          <div className="w-full sm:max-w-xs">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="you@example.com"
            />
          </div>
          <button
            type="submit"
            className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Save
          </button>
        </form>
      </ActionPanel>
    </ApplicationShell>
  );
};

export default TailwindConverter;
