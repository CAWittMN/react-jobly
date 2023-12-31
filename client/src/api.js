import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  // Company Routes

  /** Get details on a company by handle. */
  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get all companies */
  static async getCompanies(search = null) {
    if (search) {
      let res = await this.request(`companies`, search);
      return res.companies;
    } else {
      let res = await this.request(`companies`);
      return res.companies;
    }
  }

  // Job Routes

  /** Get details on a job */
  static async getJob(id) {
    let res = await this.request(`jobs/${id}`);
    return res.job;
  }

  /** Get all jobs */
  static async getJobs(search = null) {
    if (search) {
      let res = await this.request(`jobs`, search);
      return res.jobs;
    } else {
      let res = await this.request(`jobs`);
      return res.jobs;
    }
  }

  // Application Routes

  static async applyToJob(username, jobId) {
    let res = await this.request(
      `users/${username}/jobs/${jobId}/`,
      {},
      "post"
    );
    return res.message;
  }

  // User Routes

  /** Get details on a user */
  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  /** Get all users */
  static async getUsers(data = null) {
    if (data) {
      let res = await this.request(`users`, data);
      return res.users;
    } else {
      let res = await this.request(`users`);
      return res.users;
    }
  }

  /** Update a user */
  static async updateUser(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }

  /** Delete a user */
  static async deleteUser(username) {
    let res = await this.request(`users/${username}`, {}, "delete");
    return res.message;
  }

  /** Register a user */
  static async signup(data) {
    let res = await this.request(`auth/register`, data, "post");
    this.token = res.token;
    return res.token;
  }

  /** Login a user */
  static async login(data) {
    let res = await this.request(`auth/token`, data, "post");
    this.token = res.token;
    return res.token;
  }

  /** Get user from token */
  static async getCurrentUsername() {
    let user = await this.request(`auth/user`);
    return user.username;
  }

  /** Get jobs based on provided id's */
  static async getJobsFromIds(ids) {
    const idArray = Array.from(ids);
    let res = await this.request(`jobs/`, { ids: idArray });
    return res.jobs;
  }

  // obviously, you'll add a lot here ...
}

// for now, put token ("testuser" / "password" on class)
/**JoblyApi.token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";*/

export default JoblyApi;
