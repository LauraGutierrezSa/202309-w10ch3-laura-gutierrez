import { type Request, type Response } from "express";
import { foxesMock } from "../mocks/foxesMock";
import { type FoxesRepository } from "../types";
import FoxesController from "../controller/FoxesController";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a FoxesController's getFoxes method", () => {
  const foxesRepository: FoxesRepository = {
    getFoxes: jest.fn().mockReturnValue(foxesMock),
    getFoxById: jest.fn().mockReturnValue(foxesMock),
  };
  const req = {};
  const res: Pick<Response, "status" | "json"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnValue(foxesMock),
  };

  describe("When it receives a response", () => {
    test("Then it should call its status method with a 200", async () => {
      const expectedStatus = 200;

      const foxesController = new FoxesController(foxesRepository);
      await foxesController.getFoxes(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });
  });
});

describe("Given a FoxesController's getFoxById method", () => {
  describe("When it recieves a repsonse", () => {
    test("Then it should call its method status with 200", async () => {
      const foxesRepository: Pick<FoxesRepository, "getFoxById"> = {
        getFoxById: jest.fn(),
      };
      const foxesController = new FoxesController(
        foxesRepository as FoxesRepository,
      );
      const expectedStatusCode = 200;

      const req = { params: { foxId: foxesMock[0]._id } };
      const res: Pick<Response, "status" | "json"> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };

      await foxesController.getFoxById(
        req as unknown as Request<{ foxId: string }>,
        res as Response,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });
  });
});
