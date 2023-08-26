package com.dsv.radaptive.service;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.dsv.radaptive.model.CandidateModel;
import com.dsv.radaptive.repository.CandidateRepo;

@Service
public class CandidateService {

    private final CandidateRepo candidateRepo;

    public CandidateService(CandidateRepo candidateRepo) {
        this.candidateRepo = candidateRepo;
    }

    public ResponseEntity<CandidateModel> createCandidate(@Valid CandidateModel candidateModel) {

        CandidateModel response = candidateRepo.save(candidateModel);
        URI loaction = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(response.getId())
                .toUri();

        return ResponseEntity.created(loaction).body(response);
    }

    public ResponseEntity<List<CandidateModel>> getCandidate() {
        return ResponseEntity.ok(candidateRepo.findAll());
    }

    public ResponseEntity<CandidateModel> getCandidateById(Long id) {
        return ResponseEntity.ok(candidateRepo.findById(id).get());
    }

    

    
}
