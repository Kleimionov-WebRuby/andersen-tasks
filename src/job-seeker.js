/**
 * Class that gives as ability to register new seeker.
 *
 * @class JobSeeker
 */
class JobSeeker {
  /**
   * Class constructor
   * @param {String} name Name of seeker
   */
  constructor(name) {
    this.name = name;
  }

  /**
   *
   * @param {Object} [Job] Job object
   * @returns {String} send message to console log
   */
  gotNewJob(job) {
    console.log(`Hi ${this.name}. We've new job for you: ${job.getJobTitle()}`);
  }
}

module.exports = JobSeeker;
