// This file re-exports the configuration from next.config.js
// to resolve a build conflict where this empty file was being prioritized.
import nextConfig from './next.config.js';
export default nextConfig;
