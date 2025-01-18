import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center w-full mt-12">
      <h1 className="text-3xl">Loading</h1>
      <FontAwesomeIcon className="w-20 h-20" icon={faSpinner} spin />;
    </div>
  );
}
