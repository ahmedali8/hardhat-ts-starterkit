import { task } from "hardhat/config";

task("storagelayout", "Prints the storage layout of contracts").setAction(
  async (_taskArgs, hre) => {
    const { storageLayout } = hre;
    await storageLayout.export();
  }
);
