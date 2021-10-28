import {message, danger, schedule} from "danger"
// import { istanbulCoverage } from "danger-plugin-istanbul-coverage"
import { codeCoverage } from "danger-plugin-code-coverage"

const modifiedMD = danger.git.modified_files.join("- ")
message("Changed Files in this PR: \n - " + modifiedMD)

codeCoverage()
// schedule(istanbulCoverage()) // Use default configuration
