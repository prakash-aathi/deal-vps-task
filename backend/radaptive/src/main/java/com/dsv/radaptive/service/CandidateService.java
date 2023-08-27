package com.dsv.radaptive.service;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.dsv.radaptive.exception.CandidateNotFoundException;
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

    public ResponseEntity<CandidateModel> updateCandidate(Long id, @Valid CandidateModel candidateModel) {
        Optional<CandidateModel> optionalCandidate = candidateRepo.findById(id);

        if (optionalCandidate.isPresent()) {
            CandidateModel existingCandidate = optionalCandidate.get();

            if (!existingCandidate.equals(candidateModel)) {
                existingCandidate.setEmail(candidateModel.getEmail());
                existingCandidate.setRecoveryEmail(candidateModel.getRecoveryEmail());
                existingCandidate.setFirstName(candidateModel.getFirstName());
                existingCandidate.setLastName(candidateModel.getLastName());
                existingCandidate.setTitle(candidateModel.getTitle());
                existingCandidate.setCandidateGender(candidateModel.getCandidateGender());
                existingCandidate.setDob(candidateModel.getDob());
                existingCandidate.setDescription(candidateModel.getDescription());
                existingCandidate.setMobileNumber(candidateModel.getMobileNumber());
                existingCandidate.setAddress1(candidateModel.getAddress1());
                existingCandidate.setAddress2(candidateModel.getAddress2());
                existingCandidate.setCity(candidateModel.getCity());
                existingCandidate.setPostalCode(candidateModel.getPostalCode());
                existingCandidate.setCandidateCountry(candidateModel.getCandidateCountry());
                existingCandidate.setHomeLocationCity(candidateModel.getHomeLocationCity());
                existingCandidate.setCandidateState(candidateModel.getCandidateState());

                CandidateModel updatedCandidate = candidateRepo.save(existingCandidate);

                return ResponseEntity.ok(updatedCandidate);
            } else {
                return ResponseEntity.ok(existingCandidate);
            }
        } else {
            throw new CandidateNotFoundException(id);
        }

    }

}
