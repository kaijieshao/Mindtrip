import React, { createContext, useState, useContext } from 'react'
import SHA256 from 'crypto-js/sha256'

const BlockchainContext = createContext()

class Block {
  constructor(timestamp, placeData, previousHash = '') {
    this.timestamp = timestamp
    this.placeData = placeData
    this.previousHash = previousHash
    this.hash = this.calculateHash()
  }

  calculateHash() {
    return SHA256(
      this.timestamp + JSON.stringify(this.placeData) + this.previousHash
    ).toString()
  }
}

export function BlockchainProvider({ children }) {
  const [chain, setChain] = useState([])

  const mintMemory = (place) => {
    const placeData = {
      name: place.name,
      latitude: place.latitude,
      longitude: place.longitude,
      timestamp: new Date().getTime(),
    }

    const previousHash = chain.length > 0 ? chain[chain.length - 1].hash : ''
    const newBlock = new Block(new Date().getTime(), placeData, previousHash)

    setChain([...chain, newBlock])
    return newBlock
  }

  return (
    <BlockchainContext.Provider value={{ chain, mintMemory }}>
      {children}
    </BlockchainContext.Provider>
  )
}

export const useBlockchain = () => useContext(BlockchainContext)
