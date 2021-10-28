import {message, danger} from "danger"
import { istanbulCoverage } from "danger-plugin-istanbul-coverage"

const modifiedMD = danger.git.modified_files.join("- ")
message("Changed Files in this PR: \n - " + modifiedMD)


schedule(istanbulCoverage()) // Use default configuration
