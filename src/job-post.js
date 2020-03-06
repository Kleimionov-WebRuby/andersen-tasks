/**
 * Job class that create new job.
 * @class JobPost
 */
class JobPost {
  /**
   * Class constructor
   * @param {String} jobTitle Job title
   */
  constructor(jobTitle) {
    this.jobTitle = jobTitle;
  }

  /**
   * Add ability to to get job title
   * @returns {String} job title
   */
  getJobTitle() {
    return this.jobTitle;
  }
}

module.exports = JobPost;
