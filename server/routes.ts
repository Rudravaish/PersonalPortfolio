import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Serve static assets for resume and images
  // These will make the assets accessible from /assets/ path
  app.use('/assets', (req, res, next) => {
    const filePath = path.join(process.cwd(), 'assets', req.path);
    res.sendFile(filePath, (err) => {
      if (err) {
        next();
      }
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
