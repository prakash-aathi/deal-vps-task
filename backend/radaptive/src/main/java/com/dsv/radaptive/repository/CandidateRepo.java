package com.dsv.radaptive.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.dsv.radaptive.model.CandidateModel;

public interface CandidateRepo extends JpaRepository<CandidateModel, Long> {
    
}
